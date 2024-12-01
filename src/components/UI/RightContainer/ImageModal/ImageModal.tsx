import './styles.scss';

interface ImageModalProps {
  isImageClicked: boolean;
  urlImageClicked: string;
  setIsImageClicked: (isImageClicked: boolean) => void;
}

export default function ImageModal({isImageClicked, urlImageClicked, setIsImageClicked}: ImageModalProps) {
  return(
    isImageClicked &&
    <div className="image--modal" onClick={() => setIsImageClicked(false)}>
      <img className='image--modal__image' src={urlImageClicked} alt="Image clicked" />
    </div>
  );
}