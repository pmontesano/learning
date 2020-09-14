process.stdout.write("Es una lista de nros para sumar, puede terminar poniendo un . :\n");

let suma = 0;


process.stdin.on('data', data => {
  if(data.toString().trim() == '.') {
    process.exit();
  } else {
    suma += parseInt(data.toString().trim());
  }
});

process.on('exit', () => {
  process.stdout.write(`La suma total es ${suma} \n`);
});