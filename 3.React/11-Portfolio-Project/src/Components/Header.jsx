import passportPhoto from '../assets/passportPhoto.jpg'
const Header = () =>{

     return <header className="bg-blue-600 text-white p-5 rounded-xl flex justify-between items-center">
        <div>
            <div className="font-bold text-3xl">Kirandeep kaur</div>
            <div className="text-xl">B.tech Student</div>
            </div>
        <img className='rounded-full w-24' src={passportPhoto} alt="" />
        
     </header> 

}

export default Header;