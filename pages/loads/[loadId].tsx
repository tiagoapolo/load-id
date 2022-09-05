
import React from 'react';
import { useRouter } from 'next/router';

export default function LoadDetailPage () {
    const router = useRouter();
    const { loadId } = router.query;

    return <div>
        Hi Load {loadId ?? 'NOTHING'}
    </div>
}