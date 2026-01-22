import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Redirect old URL to new URL
const FilefrontPrivacyPolicyRedirect = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace('/filefront/privacy/');
    }, [router]);

    return null;
};

export default FilefrontPrivacyPolicyRedirect;
