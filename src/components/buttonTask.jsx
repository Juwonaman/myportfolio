import contactInfo from '../data/contactMe';

export function openLinkedIn() {
  const url = contactInfo[0].linkedin;
  if (!url) return;
  window.open(url, '_blank', 'noopener,noreferrer');
}
export function openInstagram(){
    const url = contactInfo[0].instagram;
    if(!url) return;
    window.open(url, '_blank', 'noopener,noreferrer')
}
export function openGitHub(){
    const url = contactInfo[0].github;
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer')
}
export function openResume() {
  const url = contactInfo[0].resume;
  if (!url) return;
  window.open(url, '_blank', 'noopener,noreferrer');
}
export function blackWhite(){

}
