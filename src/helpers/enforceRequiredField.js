
function enforceRequiredField(formState) {

    if (!formState.title) {
        return(
            "Vul aub een titel in"
            )
    } else if (!formState.subtitle) {
        return(
            "Vul aub een ondertitel in"
        )
    } else if (!formState.author) {
        return(
            "Vul aub je naam in"
        )
    } else if (formState.content.length < 300 || formState.content.length > 2000) {
        return(
            "Aantal karakters moeten minimaal 300 en maximaal 2000 zijn"
        )
    }

    return ("");
}

export default enforceRequiredField;