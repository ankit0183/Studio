import styles from "@/app/styles/navbar.module.css"
import Link from "next/link";
import Image from "next/image";
import Nav from "@/app/components/Nav";

const Header = () => {
    return (
        <header id="header" className={ styles.main_header }
   style={{ backgroundImage: 'url(assets/img/one.png)', backgroundRepeat: 'no-repeat' }}
        >
            <div className="logo float-left">
                <Link href="/">
                    <Image src="/logo-footer.png" alt="my logo image" width={150} height={40}/>
                </Link>

            </div>
            <Nav/>
        </header>
    );
};

export default Header;