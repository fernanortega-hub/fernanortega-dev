import { LayoutProps } from "../../constants/props";

const Layout = (props: LayoutProps) => {
    return(
        <div className={`w-full px-4 min-h-fit bg-surface odd:bg-surfaceVariant md:px-8 lg:px-[128px] ${props.className}`} id={props.id.toString()}>
            { props.children }
        </div> 
    )
}

export default Layout;