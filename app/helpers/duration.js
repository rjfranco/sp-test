import { helper } from '@ember/component/helper';

export default helper(function duration([duration]) {
  let hours = Math.floor(duration / 60);
  let minutes = duration % 60;
  return hours ? `${hours} hours and ${minutes} minutes` : `${minutes} minutes`;
});
