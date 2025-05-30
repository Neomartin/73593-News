export function formatTimestampToDate(timestamp) {
    const formatter = new Intl.DateTimeFormat('es-AR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    })

    return formatter.format(new Date(timestamp));
}


export function formatTimestampToInputDate(timestamp) {
    const formatter = new Intl.DateTimeFormat('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    })

    const date = new Date(timestamp);
            // 2025/05/29
    return  formatter.format(date);
    
}
