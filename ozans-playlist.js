/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
function removeDuplicates(playlist) {
    const setPlaylist = new Set(playlist);
    return [...setPlaylist];
  }
  
  /**
   * Checks whether a playlist includes a track.
   *
   * @param {string[]} playlist
   * @param {string} track
   * @returns {boolean} whether the track is in the playlist
   */
 function hasTrack(playlist, track) {
    return new Set(playlist).has(track);
  }
  
  /**
   * Adds a track to a playlist.
   *
   * @param {string[]} playlist
   * @param {string} track
   * @returns {string[]} new playlist
   */
 function addTrack(playlist, track) {
    const setPlaylist = new Set(playlist);
    setPlaylist.add(track);
    return [...setPlaylist];
  }
  
  /**
   * Deletes a track from a playlist.
   *
   * @param {string[]} playlist
   * @param {string} track
   * @returns {string[]} new playlist
   */
 function deleteTrack(playlist, track) {
    const setPlaylist = new Set(playlist);
    setPlaylist.delete(track);
    return [...setPlaylist];
  }
  
  /**
   * Lists the unique artists in a playlist.
   *
   * @param {string[]} playlist
   * @returns {string[]} list of artists
   */
 function listArtists(playlist) {
    let listArtist = [];
    const setPlaylist = new Set(playlist);
    setPlaylist.forEach((value, twoValue, set) => {
      listArtist.push(value.split("-")[1].trim());
    })
    const setListArtist = new Set(listArtist);
    return [...setListArtist];
  }
  
// TEST
// 1
// const playlist = [
//     'Court and Spark - Joni Mitchell',
//     'Big Yellow Taxi - Joni Mitchell',
//     'Court and Spark - Joni Mitchell',
//   ];  
// console.log(Array.isArray(removeDuplicates(playlist)));
// 2
// const playlist = [
//     'The Fashion Show - Grace Jones',
//     'Dr. Funkenstein - Parliament',
//   ];
   
//   console.log( hasTrack(playlist, 'Dr. Funkenstein - Parliament'));
// //=> true  
// console.log(  hasTrack(playlist, 'Walking in the Rain - Grace Jones'));
// //=> false
// 3
// const playlist = ['Selma - Bijelo Dugme'];
// console.log(addTrack(playlist, 'Atomic Dog - George Clinton'));
// //=> ['Selma - Bijelo Dugme', 'Atomic Dog - George Clinton']
// console.log(addTrack(playlist, 'Selma - Bijelo Dugme'));
// //=> ['Selma - Bijelo Dugme', 'Atomic Dog - George Clinton']
//4
// const playlist = [
//   'The Treasure - Fra Lippo Lippi',
//   'After the Fall - Klaus Nomi',
// ];

// console.log(deleteTrack(playlist, 'The Treasure - Fra Lippo Lippi'));
// //=> ['After the Fall - Klaus Nomi']

// console.log(deleteTrack(playlist, 'I Feel the Magic - Belinda Carlisle'));
// //=> ['After the Fall - Klaus Nomi']
// 5
// const playlist = [
//   'All Mine - Portishead',
//   'Sight to Behold - Devendra Banhart',
//   'Sour Times - Portishead',
// ];

// console.log(listArtists(playlist));
// //=> ['Portishead', 'Devendra Banhart']