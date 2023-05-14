export function changeVerb(verbName) {
    verbPic.src = `./images-verbs/${verbName}`;
    verbPrompt.innerHTML = `${verbName.slice(0, -4)}`
};
export const subjectPic = document.getElementById('subject');
export function changeSubject(subjectName) {
    subjectPic.src = `./images-subject/${subjectName}`;
    subjectPrompt.innerHTML = `${subjectName.slice(0, -4)}`
};
export function changeMark(markName) {
    mark.src = `./images-marks/${markName}`
    if (markName === "3.png") {
        mark.style.right = '250px';
    } else { mark.style.right = '0px' }
};
export function get_random_mark() {
    randomArrayElement(marks_array, changeMark);
}
export function closePopup() {
    popup.classList.add('close');
    burger.style.zIndex = '13';
}
export function get_random_subject() {
    randomArrayElement(subject_array, changeSubject);
}