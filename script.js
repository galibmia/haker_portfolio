document.getElementById('command-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      handleCommand(this.value);
      this.value = '';
    }
  });
  
  
  function handleCommand(commands) {
    let command = commands.toLowerCase();
    console.log(command);
    const output = document.createElement('p');
    output.textContent = '$ ' + command;
    document.querySelector('.content').appendChild(output);
    
    switch(command) {
      case 'help':
        output.textContent += '\nAvailable commands:\n- about\n- contact\n- home';
        break;
      case 'about':
        output.textContent += '\nOpening About page in a new tab...';

        window.location.href = 'about.html';
        break;
      case 'contact':
        window.location.href = 'contact.html';
        break;
      case 'home':
        window.location.href = 'index.html';
        break;
      default:
        output.textContent += '\nCommand not recognized. Type "help" to see available commands.';
    }
  }
  