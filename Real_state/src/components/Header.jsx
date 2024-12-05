import Covalent from "../assets/Covalent.svg"

function Header(){
    return(
        <>
        <div className="flex justify-between ">
                <div className="flex">
                    <img src={Covalent} alt="default_image" className="w-32 h-32" />
                </div>
                <div className="flex space-x-4 justify-end items-center text-lg text-white">
                    <div className="pl-16">
                        <a href="#about">About us</a>
                    </div>
                    <div className="pl-16">
                        <a href="#properties">Properties</a>
                    </div>
                    <div className="pl-16">
                        <a href="#contact">Contact us</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;