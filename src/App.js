import "./app.css";
import logo from "./logo.svg";

function App() {
    return (
		<div className={"container"}>
			<div className={"title"}>
				<img src={logo} alt={"React Logo"}/>
				<div>
					<h1>МЗСИ</h1>
					<h2>Лабораторная работа №2</h2>
					<p>Логвинец Вячеслав, группа ССИ</p>
				</div>
			</div>
			<p>* Пример веб-приложения на базе React.js</p>
		</div>
    )
}

export default App;