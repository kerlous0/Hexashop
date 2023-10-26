import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';


async function getData() {
  const res = await fetch('https://dummyjson.com/products')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export default async function Blog() {

  const data = await getData();
  const products = data.products;

  return (
    <div className={styles.mainContainer}>

      {
        products.map((product) => (
          <Link href={`blog/${product.id}`} className={styles.post} key={product.id}>

            <div className={styles.imageContainer}>
              <Image className={styles.image}
              src={product.thumbnail} 
              fill={true}
              alt={product.title} />
            </div>

            <div className={styles.content}>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.text}>{product.brand}</p>
            </div>
          
         </Link>
        ))
      }

      

      

    </div>
  )
}
