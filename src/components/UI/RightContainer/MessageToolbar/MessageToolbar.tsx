import { useState,useRef  } from 'react';
import './styles.scss'
import { api } from '../../../../../convex/_generated/api';
import { useMutation } from 'convex/react';


interface MessageToolbarProps {
    selectedConversation: number;
    user_id: number;
}

export default function MessageToolbar({ selectedConversation, user_id }: MessageToolbarProps) {
    const sendMessage = useMutation(api.messages.send);
    //const user = window.localStorage.getItem('user');
    const user = user_id;
    const generateUploadUrl = useMutation(api.messages.generateUploadUrl);
    const sendImage = useMutation(api.messages.sendImage);
    const imageInput = useRef<HTMLInputElement>(null);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [messageBody, setMessageBody] = useState<string>('');
    const [wantToSendImage, setWantToSendImage] = useState<boolean>(false);

    async function handleSendImage(event: React.FormEvent) {
        event.preventDefault();
    
        // Step 1: Get a short-lived upload URL
        const postUrl = await generateUploadUrl();
        // Step 2: POST the file to the URL
        const result = await fetch(postUrl, {
          method: "POST",
          headers: { "Content-Type": selectedImage!.type },
          body: selectedImage,
        });
        const { storageId } = await result.json();
        // Step 3: Save the newly allocated storage id to the database
        await sendImage({ storageId, sender_id: user, conversation_id: selectedConversation });
    
        setSelectedImage(null);
        imageInput.current!.value = "";
      }

     function handleMessageSubmit() {
        sendMessage({conversation_id: selectedConversation, sender_id: user, body: messageBody});
        setMessageBody('');
    }

    return (
        <div className="message-toolbar">

            <button className="message-toolbar__button" onClick={() => {
                setWantToSendImage(!wantToSendImage);
                setSelectedImage(null);
            }}>
                <img src="/images/icons/picture.svg" className="icon" alt="Send image" />
            </button>

            {wantToSendImage && (
                <form onSubmit={handleSendImage} className="message-toolbar__image-form">
                    <input
                        type="file"
                        accept="image/*"
                        ref={imageInput}
                        onChange={(event) => setSelectedImage(event.target.files![0])}
                        disabled={selectedImage !== null}
                    />
                    <input
                        type="submit"
                        value="Send Image"
                        disabled={selectedImage === null}
                    />
                </form>
            )}

            <input 
            type="text" 
            name='message-body'
            className="message-toolbar__input" 
            placeholder="Type a message" 
            value={messageBody}
            onChange={(e) => setMessageBody(e.target.value)} />

            <button className="message-toolbar__button" onClick={handleMessageSubmit}>
                <img src="/images/icons/send.svg" className="icon" alt="Send message" />
            </button>

            <button className="message-toolbar__button">
                <img src="/images/icons/mic.svg" className="icon" alt="Record voice message" />
            </button>
        </div>
    );
}