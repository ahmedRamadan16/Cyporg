import {AiTwotoneStar} from 'react-icons/ai';
import {AiOutlineDownload} from 'react-icons/ai';
export default function Card({Img,name,rate,type,download}) {
  return (
    <div className="card">
        <img src={Img} />
        <div className='card-content'>
        <div className="left">
            <h2>{name}</h2>
            <span>{type}</span>
        </div>
        <div className="right">
            <div className='rate'>
            <AiTwotoneStar /> 
            <span>{rate}</span>
            </div>
            <div className='download-time'>
            <AiOutlineDownload />
            <span>{download}</span>
            </div>
        </div>
        </div>
    </div>
  )
}
