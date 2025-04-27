import '../styles/ItemInfo.styles.css'

export const ItemInfo = (item) => {

 console.log('aca',item.item)

 return(
<div className='info-container'>
 <img className='item-logo' src={item?.item?.sprite}/>
 <p className='item-name'>{item?.item?.name}</p>
 <p>Calidad: {item?.item?.quality}</p>
 <p>Duración: {item?.item?.durability}</p>

</div>) 
}