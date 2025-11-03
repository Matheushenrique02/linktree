import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './App.css'


function App() {

  return (


    <div className='flex flex-col justify-center items-center w-screen 
    min-h-[100svh]'>

      {/* Conteudo */}
      <div className=" flex flex-col justify-center items-center h-[600px] w-[400px] p-[20px] mt-[30px] rounded-xl bg-cover bg-center">


      {/* Foto */}
      <div className="w-[150px] h-[150px] [perspective:1000px] flex justify-center items-center">
        <div className="
            
            bg-[url('/imagens/logo.png')]
            bg-center
            bg-cover
            rounded-full
            h-[130px]
            w-[130px]
            [transform-style:preserve-3d]
            [animation:coin-spin_4s_linear_infinite]">
          </div>
      </div>



      {/* Tittle */}
      <h2 className='font-[inter] text text-center mt-[5px]'>Nutrivibe</h2>

      <div className="text-center text font-[inter] mt-[5px]">Sua vida mais saudável
      Mais energia e bem-estar todos os dias</div>

      {/* Redes Socias */}

      <div className="flex justify-between w-[100px]">
       
        <div className='icon'> 
          <a href="https://www.instagram.com/nutrivibe.br/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} color="purple" />
          </a>
        </div>
        <div className='icon'> 
          <a href="https://api.whatsapp.com/send/?phone=5548996166055&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={24} color="green"/> 
          </a>
        </div>

      </div>



      {/* Links */}
        <nav className = 'conteinerLink'>
          <a href="https://pay.kiwify.com.br/RiXueqN?afid=YQyMWqQ9"target="_blank" rel="noopener noreferrer">
            <div className="link text">Barriga Chapada</div>
          </a>
          <a href="https://pay.kiwify.com.br/nHBGR03?afid=LC39RqC2"target="_blank" rel="noopener noreferrer">
            <div className="link text">Celulite Zero</div>
          </a>
          <a href="https://pv.b4you.com.br/pages/c5dfad0b-b6f7-4c23-b015-d6f279353f25/IrD7hSd3ye"target="_blank" rel="noopener noreferrer">
            <div className="link text">Proteína BigBoom</div>
          </a>
          <a href="https://pv.b4you.com.br/pages/d05e79ca-214d-417f-8df0-a2e0e4d20358/-hxsQu3-h1"target="_blank" rel="noopener noreferrer">
            <div className="link text">Pré-treino</div>
          </a>
          <a href="https://pv.b4you.com.br/pages/ab6d23d0-e282-4961-96a1-c0f9068d3237/3QMM2VACoc"target="_blank" rel="noopener noreferrer">
            <div className="link text">Café Termogênico</div>
          </a>
          <a href="https://pv.b4you.com.br/pages/69ef39df-3b18-4c80-bc53-9139839e4b7c/diEvdUbo-G"target="_blank" rel="noopener noreferrer">
            <div className="link text">Creatina 3 em 1</div>
          </a>
          <a href="https://pv.b4you.com.br/pages/2eb2e15f-3f04-4430-8844-9c2a3807f3d0/sbuPsmezgY"target="_blank" rel="noopener noreferrer">
            <div className="link text">Suco Greemy</div>
          </a>
          <a href="https://pv.b4you.com.br/pages/603e6b8b-7486-4fa6-a334-82a8538d2270/FjSQuh3Skf"target="_blank" rel="noopener noreferrer">
            <div className="link text">Meu Pump</div>
          </a>
          <a href="https://pv.b4you.com.br/pages/c0d79ba0-d955-40f9-9524-d8185ed78c3d/4mH3Od3_O_"target="_blank" rel="noopener noreferrer">
            <div className="link text">Reset 15D</div>
          </a>
          <a href="">
            <div className="link text">Produtos Shopee</div>
          </a>
        </nav>
      </div>

    </div>


  )
}

export default App
