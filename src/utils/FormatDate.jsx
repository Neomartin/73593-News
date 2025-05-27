export function formatTimestampToDate(timestamp) {
    const formatter = new Intl.DateTimeFormat('es-AR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    })

    return formatter.format(new Date(timestamp));
}
