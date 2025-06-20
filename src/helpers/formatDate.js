
function formatDate(date) {
    const newDate = new Date(date);

    const longOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    return (
        newDate.toLocaleDateString('nl-NL', longOptions)
    )
}

export default formatDate;