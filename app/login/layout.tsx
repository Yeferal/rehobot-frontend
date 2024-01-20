import LoadingCircle from '@/components/loading/loading-circle';
import { Suspense } from 'react';

export default function Layout({ children }: {children: React.ReactNode}) {
    return (
        <>
            <Suspense fallback={<LoadingCircle/>}>
                {children}
            </Suspense>
        </>
    );
}