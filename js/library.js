function contextMod(text) {
    let mText = text;

    // Keep things furry without getting too meta
    // ======================================
    const avoid = [
        / human /gi, / humans /gi,
        / anthropomorphic /gi, / fursuit /gi
    ];
    avoid.forEach(pattern => {
        mText = mText.replace(pattern, ' ');
    });

    mText = mText.replace(/ hand /gi, ' paw ');
    mText = mText.replace(/ hands /gi, ' paws ');
    // ======================================

    return mText;
}