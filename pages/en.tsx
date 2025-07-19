import { useEffect } from 'react';
import { useRouter } from 'next/router';

const EnRedirect = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace('/en/');
    }, [router]);

    return null;
};

export default EnRedirect;