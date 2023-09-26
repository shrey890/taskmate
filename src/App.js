import { useState } from 'react';
import './App.css'
import { AddTask } from './Components/AddTask';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { TaskList } from './Components/TaskList';
const App = () => {
	const [task, settask] = useState([

	]);
	return (
		<div className='box'>
		
			<Header />
			<main>

				<AddTask task={ task } settask={ settask } />
				<TaskList task={ task } settask={ settask } />
			</main>
			<Footer />
		</div>
	)
}

export default App