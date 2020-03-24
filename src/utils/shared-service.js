export function showLoading(state) {
    const displayStyle = state ? "flex" : "none";
    document.getElementById("loading-container").style.display = displayStyle;
}