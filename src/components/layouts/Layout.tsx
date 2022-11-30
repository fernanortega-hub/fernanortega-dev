import { LayoutProps } from "../../constants/props";

const Layout = (props: LayoutProps) => {
    return(
        <div className={`w-full px-4 min-h-fit bg-surface odd:bg-surfaceVariant ${props.className}`}>
            { props.children }
        </div> 
    )
}

export default Layout;