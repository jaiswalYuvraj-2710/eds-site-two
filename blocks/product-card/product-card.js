export default function applePage(block) {
  // console.log('JS Rendered for Apple Page');
  // console.log(block);

  Array.from(block.children).forEach((row, rowIndex) => {
    row.classList.add(`row-${rowIndex + 1}`);
    Array.from(row.children).forEach((col, colIndex) => {
      col.classList.add(`row-${rowIndex + 1}-col-${colIndex + 1}`);
    });
  });
}
