'use client';

import { useParams } from 'next/navigation';

const detail = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const params = useParams();
    const taskId = params.id;

    return (
        <>
            <h1>Detail {taskId}</h1>
            <p>{params.task}</p>
        </>
    );
};

export default detail;
