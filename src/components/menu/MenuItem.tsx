import { type ReactElement } from "react";
import { Link } from "react-router-dom";

type MenuItemProps = {
    href: string;
    title: string;
    Icon?: ReactElement
}

const MenuItem = ({ href, title, Icon }: MenuItemProps) => {
    // TODO: get pathname from React Router
    const pathname = "Get from React Router useLocation hook when installed"
    const highlighted = pathname === href

    return (
        <li className="hover:bg-white/5 md:hover:bg-white/0 transition-all duration-150 md:border-0 flex md:items-center md:justify-center p-2 border-b last:border-0 border-slate-400/10 h-full w-48 md:w-fit">
            <div className={`${highlighted ? 'underline underline-offset-4' : ''} hover:text-sky-50 text-lg transition-all duration-150 ease-in-out w-full`}>
                <Link to={href}>
                    {Icon && Icon}
                    {title}
                </Link>
            </div>
        </li>
    )
}

export default MenuItem