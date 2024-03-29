const modifier = (text) => {

    let mText = contextMod(text);

    return { text: mText };
}

// Don't modify this part
modifier(text)