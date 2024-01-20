// 'use client'

import LoadingCircle from "@/components/loading/loading-circle";
import Example from "./example";
import InputExample from "./inputs-example";
import TableExample from "./table-example";




export default function Dashboard() {
    // const dispatch = useDispatch();
    // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    // const token = useSelector((state: RootState) => state.auth.token);
    // await new Promise(resolve => setTimeout(resolve, 3000));
    
    
    return (
        <main className="container-fluid mt-4 px-0">
            <Example/>
            <TableExample/>
            <InputExample/>
            <LoadingCircle/>
        </main>
    );
}