import './ImageAndDesc.css';

export default function ImageAndDesc({imgSrc, text, desc}) {
  return (
    <div className='image-and-desc-ele'>
      <p>{text}</p>
      <figure>
        <img src={imgSrc} />  
        <figcaption>{desc}</figcaption>
      </figure>
    </div>
  )
}