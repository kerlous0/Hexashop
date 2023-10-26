import styles from './page.module.css';
import Image from 'next/image';


async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export default async function Post({params}) {

  const product = await getData(params.id);

  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image 
            className={styles.image}
            src={product.thumbnail}
            alt={product.title}
            fill={true}
          />
          <span className={styles.author}>{product.category}</span>
        </div>
      
      </header>

      <div className={styles.content}>

        <div className={styles.gallery}>
          {product.images.map(image => (
            <Image
              key={product.id}
              src={image}
              alt={product.title}
              width={150}
              height={150} />
          ))}
        </div>

        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Eu mi bibendum neque egestas congue quisque egestas. Ultrices sagittis orci a scelerisque purus. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Pulvinar neque laoreet suspendisse interdum. Amet luctus venenatis lectus magna fringilla. Senectus et netus et malesuada fames. Nulla at volutpat diam ut venenatis tellus in. Varius duis at consectetur lorem donec. Posuere ac ut consequat semper viverra nam libero. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Neque sodales ut etiam sit amet nisl purus in mollis. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Quis ipsum suspendisse ultrices gravida. Enim tortor at auctor urna nunc id cursus. Consectetur adipiscing elit ut aliquam purus sit amet luctus. Purus gravida quis blandit turpis. Amet mattis vulputate enim nulla aliquet porttitor. Tellus integer feugiat scelerisque varius. Scelerisque purus semper eget duis. Augue eget arcu dictum varius duis at. Urna cursus eget nunc scelerisque viverra mauris in aliquam sem. Eu facilisis sed odio morbi quis. Nulla porttitor massa id neque aliquam vestibulum morbi. Laoreet non curabitur gravida arcu ac tortor. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Scelerisque eu ultrices vitae auctor eu augue. Massa massa ultricies mi quis hendrerit. Congue quisque egestas diam in arcu cursus euismod. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Tristique senectus et netus et malesuada fames ac. Arcu dictum varius duis at consectetur lorem donec. Facilisis volutpat est velit egestas dui id ornare arcu. Neque sodales ut etiam sit amet nisl purus in. Sed enim ut sem viverra aliquet. Enim diam vulputate ut pharetra. Nec feugiat in fermentum posuere urna nec tincidunt. Sapien et ligula ullamcorper malesuada proin libero nunc. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Tortor at risus viverra adipiscing at in tellus integer. Placerat vestibulum lectus mauris ultrices eros in. Orci ac auctor augue mauris augue neque gravida in fermentum. Blandit libero volutpat sed cras ornare. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Et leo duis ut diam. Feugiat nibh sed pulvinar proin gravida. Lectus mauris ultrices eros in. Bibendum neque egestas congue quisque egestas diam in arcu. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Malesuada pellentesque elit eget gravida. Nibh nisl condimentum id venenatis. Enim neque volutpat ac tincidunt vitae semper quis. Porttitor eget dolor morbi non arcu. Dolor magna eget est lorem ipsum dolor sit. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Nisl pretium fusce id velit ut tortor pretium. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Proin nibh nisl condimentum id venenatis a condimentum vitae. Sapien faucibus et molestie ac. Nibh praesent tristique magna sit amet. Habitant morbi tristique senectus et netus. Mauris sit amet massa vitae tortor condimentum. Imperdiet sed euismod nisi porta. Velit euismod in pellentesque massa. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Leo duis ut diam quam nulla porttitor. Morbi tristique senectus et netus. Praesent elementum facilisis leo vel. At auctor urna nunc id cursus metus aliquam eleifend. Nisi est sit amet facilisis. Interdum velit euismod in pellentesque. Blandit aliquam etiam erat velit scelerisque. Diam phasellus vestibulum lorem sed risus ultricies tristique. Ultrices neque ornare aenean euismod elementum nisi quis. Diam sollicitudin tempor id eu nisl nunc. Amet porttitor eget dolor morbi non arcu risus. Diam in arcu cursus euismod quis viverra nibh cras. Auctor neque vitae tempus quam. Nibh mauris cursus mattis molestie a iaculis. Pellentesque dignissim enim sit amet venenatis. Adipiscing vitae proin sagittis nisl. A lacus vestibulum sed arcu non. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Augue lacus viverra vitae congue eu consequat ac felis. Enim nec dui nunc mattis enim ut. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Aenean et tortor at risus viverra adipiscing at in. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Quis lectus nulla at volutpat diam ut. Elementum facilisis leo vel fringilla est ullamcorper eget. Orci dapibus ultrices in iaculis. Nibh praesent tristique magna sit. Proin sed libero enim sed faucibus turpis in eu mi. Enim sit amet venenatis urna. Sit amet luctus venenatis lectus. Commodo quis imperdiet massa tincidunt nunc. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus.</p>
      </div>
    
    </div>
  )
}
