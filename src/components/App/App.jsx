// // src/App.jsx

// import Product from './Product';

// export default function App() {
// 	return (
// 		<div>
// 			<h1>Best selling</h1>

// 			<Product />
// 			<Product />
// 			<Product />
// 		</div>
// 	);
// }
//!========= Будь-який компонент, в тому числі Product, оголошує один параметр - props,
//! це завжди буде об'єкт, що містить усі передані пропси.
// src/components/App.jsx
// import Product from './Product'; // Заменяем import { Product } from './Product';

// export default function App() {
// 	return (
// 		<div>
// 			<h1>Best selling</h1>

// 			<Product
// 				name="Tacos With Lime"
// 				imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
// 				price={10.99}
// 			/>
// 			<Product
// 				name="Fries and Burger"
// 				imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
// 				price={14.29}
// 			/>
// 		</div>
// 	);
// }
//!========= Визначення значення за замовчуванням гарантує, що props.imgUrl матиме значення,
//!========= навіть якщо його не вказано під час виклику компонента у батька.
// src/components/App.jsx

// export default function App() {
// 	return (
// 		<div>
// 			<h1>Best selling</h1>

// 			<Product name="Tacos With Lime" price={10.99} />
// 			<Product
// 				name="Fries and Burger"
// 				imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
// 				price={14.29}
// 			/>
// 		</div>
// 	);
// }

//!=========//!=========//!=========//!=========//!=========//!=========//!=========

// const favouriteBooks = [
// 	{ id: 'id-1', name: 'JS for beginners' },
// 	{ id: 'id-2', name: 'React basics' },
// 	{ id: 'id-3', name: 'React Router overview' },
// ];

// const BookList = ({ books }) => {
// 	return (
// 		<ul>
// 			{books.map((book) => {
// 				return <li key={book.id}>{book.name}</li>;
// 			})}
// 		</ul>
// 	);
// };

// const App = () => {
// 	return (
// 		<>
// 			<h1>Books of the week</h1>
// 			<BookList books={favouriteBooks} />
// 		</>
// 	);
// };
// export default App;
