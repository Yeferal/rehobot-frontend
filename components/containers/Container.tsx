
interface ParamsContainer {
    children: React.ReactNode;
    variante?: string;
}


export default function Container({ 
    children, 
    variante = 'container',
}: ParamsContainer) {
    return (
        <div className={variante}>
            {children}
        </div>
    );
}