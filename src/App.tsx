import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from "./Shared/Footer/Footer.tsx";
import Header from "./Shared/Header/Header.tsx";
import {MenuItem} from "./Interface/MenuItem.tsx";

function App() {
    const apiUrl = import.meta.env.VITE_API_URL;
    console.log(apiUrl);
    console.log(import.meta.env.MODE);
    const [count, setCount] = useState(0)

    const menuData: MenuItem[] = [
        { label: 'Home', url: '/' },
        {
            label: 'Services',
            children: [
                { label: 'Build Furniture', url: '/products/a' },
                { label: 'Product Z', url: '/products/z' }, // Demonstrates sorting
                { label: 'Product Showcase', url: '/products/showcase' },
            ],
        },
        {
            label: 'About Us',
            children: [
                { label: 'Our Team' }, // No 'url' property
                { label: 'Mission Statement', url: '/about/mission' },
            ],
        },
        { label: 'Contact', url: '/contact' },
    ];

    return (
        <>
            <Header menuData={menuData}/>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <Footer developmentMode={import.meta.env.MODE}/>
        </>
    )
}

export default App
