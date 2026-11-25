import './Layout.css'

const Layout = ({children}) => {
    return (
        <section className="layout">
            {children}
        </section>
    );
}

export default Layout;