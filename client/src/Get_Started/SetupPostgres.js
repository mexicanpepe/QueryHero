export const macPythonPost = [
  {
    title: 'Downloading PostgreSQL using Homebrew:',
    description: 'Open the Terminal on your Mac and follow these steps:',
    code: [
      '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
      'brew update',
      'brew install postgresql',
      'postgres --version',
    ],
  },
  {
    title: 'Creating a New Database for Your Python Project:',
    description: 'Start PostgreSQL server:',
    code: [
      'brew services start postgresql',
      'psql postgres',
      'CREATE DATABASE your_database_name;',
      '\\q',
    ],
  },
];

export const macJavascriptPost = [
  {
    title: 'Downloading PostgreSQL using Homebrew:',
    description: 'Open the Terminal on your Mac and follow these steps:',
    code: [
      '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
      'brew update',
      'brew install postgresql',
      'postgres --version',
    ],
  },
  {
    title: 'Creating a New Database for Your JavaScript Project:',
    description: 'Start PostgreSQL server:',
    code: [
      'brew services start postgresql',
      'psql postgres',
      'CREATE DATABASE your_database_name;',
      '\\q',
    ],
  },
];

export const winPythonPost = [
  {
    title: 'Downloading PostgreSQL Installer for Windows:',
    description: 'Go to the official PostgreSQL website and download the Windows installer.',
    code: [
      'https://www.postgresql.org/download/windows/',
    ],
  },
  {
    title: 'Installing PostgreSQL:',
    description: 'Run the downloaded installer and follow the installation wizard.',
    code: [
      'Remember the password you set during installation.',
    ],
  },
  {
    title: 'Adding PostgreSQL to System PATH:',
    description: 'Add PostgreSQL bin directory to your system PATH:',
    code: [
      'C:\\Program Files\\PostgreSQL\\15.3\\bin',
    ],
  },
  {
    title: 'Starting PostgreSQL Server:',
    description: 'Open Command Prompt and run:',
    code: [
      'pg_ctl -D "C:\\Program Files\\PostgreSQL\\15.3\\data" start',
    ],
  },
  {
    title: 'Creating a New Database for Your Python Project:',
    description: 'Open Command Prompt and run:',
    code: [
      'psql -U postgres',
      'CREATE DATABASE your_database_name;',
      '\\q',
    ],
  },
];

export const winJavascriptPost = [
  {
    title: 'Downloading PostgreSQL Installer for Windows:',
    description: 'Go to the official PostgreSQL website and download the Windows installer.',
    code: [
      'https://www.postgresql.org/download/windows/',
    ],
  },
  {
    title: 'Installing PostgreSQL:',
    description: 'Run the downloaded installer and follow the installation wizard.',
    code: [
      'Remember the password you set during installation.',
    ],
  },
  {
    title: 'Adding PostgreSQL to System PATH:',
    description: 'Add PostgreSQL bin directory to your system PATH:',
    code: [
      'C:\\Program Files\\PostgreSQL\\15.3\\bin',
    ],
  },
  {
    title: 'Starting PostgreSQL Server:',
    description: 'Open Command Prompt and run:',
    code: [
      'pg_ctl -D "C:\\Program Files\\PostgreSQL\\15.3\\data" start',
    ],
  },
  {
    title: 'Creating a New Database for Your JavaScript Project:',
    description: 'Open Command Prompt and run:',
    code: [
      'psql -U postgres',
      'CREATE DATABASE your_database_name;',
      '\\q',
    ],
  },
];