export const LANGUAGES = {
    en: {
        name: "English",
        flag: "https://flagsapi.com/GB/flat/32.png",
        translations: {
            title: "Tic Tac Toe",
            selectMode: 'Select mode:',
            pvpLocal: 'PvP (Local)',
            pvpOnline: 'PvP (Online)',
            vsBot: 'Against Bot',
            boardSize: 'Select the size of the board:',
            botDifficulty: 'Select the difficulty of the bot:',
            difficultyEasy: 'Easy',
            difficultyMedium: 'Medium',
            difficultyImpossible: 'Impossible',
            difficultyAI: 'AI',
            startingPlayer: 'Starting player:',
            startGame: 'Start game',
            restartGame: 'Play again',
            nowPlaying: 'Now playing:',
            enemyThinking: 'Enemy is thinking...',
            gameTie: 'It\'s a tie!',
            gameWin: 'Player {player} wins!',
            gameWon: 'You win!',
            createOnlineGame: 'Create game',
            joinOnlineGame: 'Join game',
            noGamesFound: 'No games found',
            gameName: 'Game name:',
            gameVisibility: 'Game visibility:',
            public: 'Public',
            unlisted: 'Unlisted',
            private: 'Private',
            gamePassword: 'Game password:',
            gameCode: 'Game code:',
            password: 'Password:',
            leaveGame: 'Leave',
            leaveGameConfirm: 'Are you sure you want to leave the game?',
            yes: 'Yes',
            no: 'No',
            player: 'player',
            players: 'players',
            ready: 'Ready',
            notReady: 'Not ready',
            waitingForPlayers: 'Waiting for players...',
            copyLink: 'Join link copied to clipboard',
            copyCode: 'Game code copied to clipboard',
            invalidSize: 'Invalid board size. Please select a size between 3 and 10.',
            invalidGameName: 'Invalid game name format. Please use only letters, numbers and spaces. Length must be between 3 and 20 characters.',
            invalidPasswordFormat: 'Invalid password format. Please use only letters, numbers and special characters. Length must be between 6 and 20 characters.',
            invalidGameCode: 'Invalid game code format. Please use only letters and numbers. Length must be 6 characters.',
            badRequest: 'An error occurred while joining the game. (Bad Request)',
            unauthorized: 'Failed to authenticate, please try again.',
            forbidden: 'You are not allowed to join this game.',
            notFound: 'Could not find the game.',
            internalServerError: 'An error occurred while joining the game.',
            notAllowed: 'You are not allowed to perform this action.',
            gameNotFound: 'Game not found. Please check the code and try again.',
            aiMoveError: 'An error occurred while fetching the AI move.',
            createGameError: 'An error occurred while creating the online game.',
            joinGameError: 'An error occurred while joining the online game.',
            listGamesError: 'An error occurred while fetching the list of online games.',
            helpHeader: 'How to play?',
            game: 'Game',
            online: 'Online',
            about: 'About me',
            generalInfo: 'General Information',
            generalInfoContent: `
                Tic-Tac-Toe is a simple yet strategic two-player game played on a 3x3 grid. Players take turns marking a square with their symbol - "X" or "O".
                The goal is to form a straight line of three of their symbols, either horizontally, vertically, or diagonally.<br><br>

                Despite its simplicity, the game encourages logical thinking and strategy, as an optimal player can always force a win or a draw. Tic-Tac-Toe
                is often used as an introduction to game theory and artificial intelligence due to its finite number of possible game states.
            `, commonStrategies: 'Common Strategies',
            commonStrategiesContent: 'While Tic-Tac-Toe is a simple game, mastering it requires strategic thinking. Here are some key strategies to increase your chances of winning:',
            cornerOpening: 'Corner Opening: Always try to start in a corner. This often gives you better chances to create multiple winning lines.',
            centerControl: 'Center Control: Taking the center square is a strong move, as it maximizes your options for forming a winning line.',
            blockingOpponent: 'Blocking Your Opponent: Always look for your opponent’s potential winning moves and block them before they can complete a row.',
            forkingStrategy: 'Forking Strategy: A fork is when you create two possible winning moves at the same time. Your opponent can only block one, leading to your victory.',
            avoidingLosses: 'Avoiding Forced Losses: If your opponent gets two marks in a row with an empty space left, you must block it immediately.',
            localPvPMode: 'Local Player vs Player Mode',
            localPvPModeContent: `
                In Local Player vs. Player Mode, two players take turns making moves on the same device. This mode offers flexibility in game settings to customize the experience.<br><br>

                <b>Game Settings:</b>
            `, boardSizeDesc: 'Board Size: Choose a board size between 3×3 and 10×10. Larger boards create longer, more strategic matches.',
            startingPlayerDesc: 'Starting Player: Select whether X or O makes the first move. The first player usually has a slight advantage.',
            howToPlay: 'How to Play:',
            howToPlay1: 'Players alternate turns, placing their symbol (X or O) on an empty cell.',
            howToPlay2: 'The objective is to align a specific number of symbols in a row, column, or diagonal:',
            howToPlay3: 'For a 3×3 board: Get 3 in a row to win.',
            howToPlay4: 'For larger boards: Get n in a row to win (n is the size of the board).',
            howToPlay5: 'If the board fills up without a winner, the game ends in a draw.',
            onlinePvPMode: 'Online Player vs Player Mode',
            onlinePvPContent: `
                In Online 1v1 Mode, players can challenge opponents over the internet. You can create or join games and customize settings for an optimal experience.<br><br>

                <b>Creating a Game</b><br>
                When creating a game, you can choose from the following visibility options:
            `, publicDesc: 'Public: The game appears in the public game list, allowing anyone to join.',
            unlistedDesc: 'Unlisted: The game does not appear in the public list, but can be joined via game code or direct URL.',
            privateDesc: 'Private: The game requires a password for entry, ensuring only invited players can join.',
            onlinePvPContent1: 'You can also set the starting player as:',
            xStart: 'X (always starts)',
            oStart: 'O (always starts)',
            randomStart: 'Random (randomly decides who starts)',
            afterCreating: `
                After creating a game, you’ll enter the Game Lobby, where the game owner can assign each player’s symbol (X or O) before starting the match.<br><br>

                <b>Joining a Game</b><br>
                You can join a game in three ways:
            `, selectPublicList: 'Selecting a game from the public list (for public games).',
            enterGameCode: 'Entering a game code (for unlisted or private games).',
            useDirectUrl: 'Using a direct URL shared by the game creator (currently only for public or unlisted games).',
            gameplay: 'Gameplay',
            standardRules: 'The game follows standard Tic-Tac-Toe rules, with players taking turns to place their symbol on the board.',
            winCondition: 'First player to get 3 in a row wins.',
            drawCondition: 'If the board fills up with no winner, the game ends in a draw.',
            playerVsBotMode: 'Player vs Bot Mode',
            playerVsBotContent: `
                In Player vs Bot Mode, you can challenge a computer opponent with different difficulty levels. Customize the game settings and
                test your skills against increasingly challenging bots!<br><br>

                <b>Game Settings</b>
            `, vsBotStarting: 'Starting Player: You can choose whether you or the bot starts first. The bot always plays as X.',
            vsBotWinCondition: 'Win Conditions: First one to get 3 in a row wins.',
            botDifficultyLevels: 'Bot Difficulty Levels',
            botDifficultyEasy: '<b>Easy (Random)</b> – The bot makes completely random moves, offering little to no challenge.',
            botDifficultyMedium: '<b>Medium (Basic Strategy)</b> – The bot follows simple rules:',
            botDifficultyImpossible: '<b>Impossible (Minimax Algorithm)</b> – The bot uses the Minimax algorithm, which means it plays perfectly and cannot lose.',
            botDifficultyAI: `
                <b>AI (Gemini 2.0 Flash Lite)</b> – The bot uses a language Gemini 2.0 Flash Lite model to predict moves, but since it sometimes chooses occupied cells,
                it falls back to the Medium bot’s strategy when necessary. This makes the AI a mix of unpredictable and strategic play.
            `, winIfPossible: 'Win if possible.',
            blockOpponentsMove: 'If winning is not possible, block the opponent’s winning move.',
            makeRandomMove: 'If neither applies, make a random move.',
            turnsAlternate: 'Turns alternate between you and the bot.',
            botMakesMove: 'The bot instantly makes its move when it’s its turn.',
            endsInDraw: 'If the board fills up with no winner, the game ends in a draw.'
        }
    },
    pl: {
        name: "Polski",
        flag: "https://flagsapi.com/PL/flat/32.png",
        translations: {
            title: "Kółko i Krzyżyk",
            selectMode: 'Wybierz tryb:',
            pvpLocal: 'PvP (Lokalnie)',
            pvpOnline: 'PvP (Online)',
            vsBot: 'Przeciwko Botowi',
            boardSize: 'Wybierz rozmiar planszy:',
            botDifficulty: 'Wybierz poziom trudności bota:',
            difficultyEasy: 'Łatwy',
            difficultyMedium: 'Średni',
            difficultyImpossible: 'Niemożliwy',
            difficultyAI: 'AI',
            startingPlayer: 'Zaczynający gracz:',
            startGame: 'Rozpocznij grę',
            restartGame: 'Zagraj ponownie',
            nowPlaying: 'Teraz gra:',
            enemyThinking: 'Przeciwnik myśli...',
            gameTie: 'Remis!',
            gameWin: 'Gracz {player} wygrywa!',
            gameWon: 'Wygrałeś!',
            createOnlineGame: 'Utwórz grę',
            joinOnlineGame: 'Dołącz do gry',
            noGamesFound: 'Nie znaleziono gier',
            gameName: 'Nazwa gry:',
            gameVisibility: 'Widoczność gry:',
            public: 'Publiczna',
            unlisted: 'Niepubliczna',
            private: 'Prywatna',
            gamePassword: 'Hasło do gry:',
            gameCode: 'Kod gry:',
            password: 'Hasło:',
            leaveGame: 'Opuść',
            leaveGameConfirm: 'Czy na pewno chcesz opuścić grę?',
            yes: 'Tak',
            no: 'Nie',
            player: 'gracz',
            players: 'graczy',
            ready: 'Gotowy',
            notReady: 'Niegotowy',
            waitingForPlayers: 'Oczekiwanie na graczy...',
            copyLink: 'Link dołączenia skopiowany do schowka',
            copyCode: 'Kod gry skopiowany do schowka',
            invalidSize: 'Nieprawidłowy rozmiar planszy. Wybierz rozmiar między 3 a 10.',
            invalidGameName: 'Nieprawidłowy format nazwy gry. Użyj tylko liter, cyfr i spacji. Długość musi wynosić od 3 do 20 znaków.',
            invalidPasswordFormat: 'Nieprawidłowy format hasła. Użyj tylko liter, cyfr i znaków specjalnych. Długość musi wynosić od 6 do 20 znaków.',
            invalidGameCode: 'Nieprawidłowy format kodu gry. Użyj tylko liter i cyfr. Długość musi wynosić 6 znaków.',
            badRequest: 'Wystąpił błąd podczas dołączania do gry. (Nieprawidłowe żądanie)',
            unauthorized: 'Uwierzytelnienie nie powiodło się, spróbuj ponownie.',
            forbidden: 'Nie masz uprawnień do dołączenia do tej gry.',
            notFound: 'Nie znaleziono gry.',
            internalServerError: 'Wystąpił błąd podczas dołączania do gry.',
            notAllowed: 'Nie masz uprawnień do wykonania tej akcji.',
            gameNotFound: 'Gra nie znaleziona. Sprawdź kod i spróbuj ponownie.',
            aiMoveError: 'Wystąpił błąd podczas pobierania ruchu AI.',
            createGameError: 'Wystąpił błąd podczas tworzenia gry online.',
            joinGameError: 'Wystąpił błąd podczas dołączania do gry online.',
            listGamesError: 'Wystąpił błąd podczas pobierania listy gier online.',
            helpHeader: 'Jak grać?',
            game: 'Gra',
            online: 'Online',
            about: 'O mnie',
            generalInfo: 'Informacje ogólne',
            generalInfoContent: `
                Kółko i krzyżyk to prosta, ale strategiczna gra dla dwóch graczy, rozgrywana na siatce 3x3. Gracze na zmianę oznaczają pole swoim symbolem – „X” lub „O”.
                Celem jest ułożenie trzech swoich symboli w jednej linii – poziomo, pionowo lub ukośnie.<br><br>
                
                Mimo swojej prostoty, gra wymaga logicznego myślenia i strategii, ponieważ optymalny gracz zawsze może wymusić zwycięstwo lub remis. Kółko i krzyżyk 
                jest często wykorzystywane jako wprowadzenie do teorii gier i sztucznej inteligencji ze względu na skończoną liczbę możliwych stanów gry.
            `, commonStrategies: 'Popularne strategie',
            commonStrategiesContent: 'Mimo że kółko i krzyżyk to prosta gra, opanowanie jej wymaga myślenia strategicznego. Oto kilka kluczowych strategii, które zwiększą Twoje szanse na wygraną:',
            cornerOpening: 'Otwarcie w rogu: Zawsze spróbuj zacząć w rogu. Często daje to lepsze szanse na stworzenie wielu linii wygrywających.',
            centerControl: 'Kontrola środka: Zajęcie środkowego pola to silny ruch, ponieważ maksymalizuje Twoje możliwości stworzenia linii wygrywającej.',
            blockingOpponent: 'Blokowanie przeciwnika: Zawsze szukaj potencjalnych ruchów wygrywających przeciwnika i blokuj je, zanim uda im się ukończyć linię.',
            forkingStrategy: 'Strategia widełkowa: Widełka to sytuacja, w której tworzysz dwa możliwe ruchy wygrywające jednocześnie. Twój przeciwnik może zablokować tylko jeden, co prowadzi do Twojego zwycięstwa.',
            avoidingLosses: 'Unikanie wymuszonych porażek: Jeśli przeciwnik ma dwa znaki pod rząd z jednym pustym polem, musisz go natychmiast zablokować.',
            localPvPMode: 'Tryb lokalny Gracz vs Gracz',
            localPvPModeContent: `
                W trybie Lokalnym Gracz kontra Gracz dwaj gracze na zmianę wykonują ruchy na tym samym urządzeniu. Tryb ten oferuje elastyczność w ustawieniach gry,
                umożliwiając dostosowanie rozgrywki do własnych preferencji.<br><br>
                
                <b>Ustawienia gry:</b>
            `, boardSizeDesc: 'Rozmiar planszy: Wybierz rozmiar planszy między 3×3 a 10×10. Większe plansze tworzą dłuższe, bardziej strategiczne rozgrywki.',
            startingPlayerDesc: 'Zaczynający gracz: Wybierz, czy X czy O wykonuje pierwszy ruch. Pierwszy gracz zazwyczaj ma niewielką przewagę.',
            howToPlay: 'Jak grać:',
            howToPlay1: 'Gracze na zmianę wykonują ruchy, umieszczając swój symbol (X lub O) w pustym polu.',
            howToPlay2: 'Celem jest ułożenie określonej liczby symboli w rzędzie, kolumnie lub na przekątnej:',
            howToPlay3: 'Dla planszy 3×3: Uzyskaj 3 w rzędzie, aby wygrać.',
            howToPlay4: 'Dla większych plansz: Uzyskaj n w rzędzie, aby wygrać (n to rozmiar planszy).',
            howToPlay5: 'Jeśli plansza się zapełni bez zwycięzcy, gra kończy się remisem.',
            onlinePvPMode: 'Tryb Online Gracz vs Gracz',
            onlinePvPContent: `
                W trybie Online 1v1 gracze mogą rywalizować z przeciwnikami przez internet. Możesz tworzyć lub dołączać do gier oraz dostosowywać ustawienia, aby zapewnić optymalne wrażenia.<br><br>

                <b>Tworzenie gry</b><br>
                Podczas tworzenia gry możesz wybrać jedną z następujących opcji widoczności:
            `, publicDesc: 'Publiczna: Gra widoczna jest na liście publicznych gier, umożliwiając każdemu dołączenie.',
            unlistedDesc: 'Niepubliczna: Gra nie jest widoczna na publicznej liście gier, ale można do niej dołączyć za pomocą kodu gry lub adresu URL.',
            privateDesc: 'Prywatna: Gra wymaga hasła do wejścia, zapewniając, że tylko zaproszeni gracze mogą dołączyć.',
            onlinePvPContent1: 'Możesz również ustawić zaczynającego gracza jako:',
            xStart: 'X (zawsze zaczyna)',
            oStart: 'O (zawsze zaczyna)',
            randomStart: 'Losowy (losowo decyduje, kto zaczyna)',
            afterCreating: `
                Po stworzeniu gry wejdziesz do lobby gry, gdzie host gry może przypisać symbol każdemu graczowi (X lub O) przed rozpoczęciem meczu.<br><br>
                
                <b>Dołączanie do gry</b><br>
                Możesz dołączyć do gry na trzy sposoby:
            `, selectPublicList: 'Wybierając grę z publicznej listy (dla publicznych gier).',
            enterGameCode: 'Wprowadzając kod gry (dla niepublicznych lub prywatnych gier).',
            useDirectUrl: 'Korzystając z łącza URL udostępnionego przez hosta gry (obecnie tylko dla gier publicznych lub niepublicznych).',
            gameplay: 'Rozgrywka',
            standardRules: 'Gra podąża za standardowymi zasadami kółko i krzyżyk, z graczami na zmianę umieszczającymi swój symbol na planszy.',
            winCondition: 'Pierwszy gracz, który uzyska 3 w rzędzie, wygrywa.',
            drawCondition: 'Jeśli plansza się zapełni bez zwycięzcy, gra kończy się remisem.',
            playerVsBotMode: 'Tryb Gracz vs Bot',
            playerVsBotContent: `
                W trybie Gracz kontra Bot możesz zmierzyć się z komputerem o różnych poziomach trudności. Dostosuj ustawienia gry i przetestuj 
                swoje umiejętności przeciwko coraz trudniejszym botom!<br><br>
                
                <b>Ustawienia gry</b>
            `, vsBotStarting: 'Zaczynający gracz: Możesz wybrać, czy Ty czy bot zaczyna jako pierwszy. Bot zawsze gra jako X.',
            vsBotWinCondition: 'Warunki zwycięstwa: Pierwszy, kto uzyska 3 w rzędzie, wygrywa.',
            botDifficultyLevels: 'Poziomy trudności bota',
            botDifficultyEasy: '<b>Łatwy (Losowy)</b> – Bot wykonuje całkowicie losowe ruchy, oferując niewielkie wyzwanie.',
            botDifficultyMedium: '<b>Średni (Podstawowa strategia)</b> – Bot stosuje proste zasady:',
            botDifficultyImpossible: '<b>Niemożliwy (Algorytm Minimax)</b> – Bot korzysta z algorytmu Minimax, co oznacza, że gra idealnie i nie może przegrać.',
            botDifficultyAI: `
                <b>AI (Gemini 2.0 Flash Lite)</b> – Bot wykorzystuje model językowy Gemini 2.0 Flash Lite do przewidywania ruchów, ale ponieważ czasami wybiera zajęte
                pola, w razie potrzeby przełącza się na strategię bota o średnim poziomie trudności. Dzięki temu AI łączy elementy nieprzewidywalności i strategicznej gry.
            `, winIfPossible: 'Wygraj, jeśli to możliwe.',
            blockOpponentsMove: 'Jeśli wygrana nie jest możliwa, zablokuj wygraną przeciwnika.',
            makeRandomMove: 'Jeśli żadne z powyższych nie ma zastosowania, wykonaj losowy ruch.',
            turnsAlternate: 'Ruchy są wykonywane na zmianę między Tobą a botem.',
            botMakesMove: 'Bot natychmiast wykonuje ruch, gdy jest jego kolej.',
            endsInDraw: 'Jeśli plansza się zapełni bez zwycięzcy, gra kończy się remisem.'
        }
    },
    es: {
        name: "Español",
        flag: "https://flagsapi.com/ES/flat/32.png",
        translations: {
            title: "Tres en Raya",
            selectMode: 'Seleccionar modo:',
            pvpLocal: 'PvP (Local)',
            pvpOnline: 'PvP (En linea)',
            vsBot: 'Contra Bot',
            boardSize: 'Seleccionar tamaño de la tabla:',
            botDifficulty: 'Seleccionar la dificultad del bot:',
            difficultyEasy: 'Fácil',
            difficultyMedium: 'Medio',
            difficultyImpossible: 'Imposible',
            difficultyAI: 'AI',
            startingPlayer: 'Jugador titular:',
            startGame: 'Iniciar juego',
            restartGame: 'Jugar de nuevo',
            nowPlaying: 'Ahora jugando:',
            enemyThinking: 'El enemigo está pensando...',
            gameTie: '¡Es un empate!',
            gameWin: '¡El jugador {player} gana!',
            gameWon: '¡Ganaste!',
            createOnlineGame: 'Crear juego',
            joinOnlineGame: 'Unirse al juego',
            noGamesFound: 'No se encontraron juegos',
            gameName: 'Nombre del juego:',
            gameVisibility: 'Visibilidad del juego:',
            public: 'Público',
            unlisted: 'No listado',
            private: 'Privado',
            gamePassword: 'Contraseña del juego:',
            gameCode: 'Código del juego:',
            password: 'Contraseña:',
            leaveGame: 'Dejar',
            leaveGameConfirm: '¿Estás seguro de que quieres abandonar el juego?',
            yes: 'Sí',
            no: 'No',
            player: 'jugador',
            players: 'jugadores',
            ready: 'Listo',
            notReady: 'No listo',
            waitingForPlayers: 'Esperando jugadores...',
            copyLink: 'Enlace de unión copiado al portapapeles',
            copyCode: 'Código de juego copiado al portapapeles',
            invalidSize: 'Tamaño de tablero no válido. Seleccione un tamaño entre 3 y 10.',
            invalidGameName: 'Formato de nombre de juego no válido. Utilice solo letras, números y espacios. La longitud debe estar entre 3 y 20 caracteres.',
            invalidPasswordFormat: 'Formato de contraseña no válido. Utilice solo letras, números y caracteres especiales. La longitud debe estar entre 6 y 20 caracteres.',
            invalidGameCode: 'Formato de código de juego no válido. Utilice solo letras y números. La longitud debe ser de 6 caracteres.',
            badRequest: 'Se produjo un error al unirse al juego. (Solicitud incorrecta)',
            unauthorized: 'Error de autenticación, por favor inténtelo de nuevo.',
            forbidden: 'No tienes permiso para unirte a este juego.',
            notFound: 'No se pudo encontrar el juego.',
            internalServerError: 'Se produjo un error al unirse al juego.',
            notAllowed: 'No tienes permiso para realizar esta acción.',
            gameNotFound: 'Juego no encontrado. Por favor, comprueba el código e inténtalo de nuevo.',
            aiMoveError: 'Se produjo un error al obtener el movimiento de la IA.',
            createGameError: 'Se produjo un error al crear el juego en línea.',
            joinGameError: 'Se produjo un error al unirse al juego en línea.',
            listGamesError: 'Se produjo un error al obtener la lista de juegos en línea.',
            helpHeader: '¿Cómo se juega?',
            game: 'Juego',
            online: 'En línea',
            about: 'Sobre mí',
            generalInfo: 'Información general',
            generalInfoContent: `
                Tres en Raya es un juego sencillo pero estratégico para dos jugadores que se juega en una cuadrícula de 3x3. Los jugadores se turnan para marcar un cuadrado con su símbolo: "X" o "O".
                El objetivo es formar una línea recta con tres de sus símbolos, ya sea en horizontal, vertical o diagonal.<br><br>
                
                A pesar de su simplicidad, el juego fomenta el pensamiento lógico y la estrategia, ya que un jugador óptimo siempre puede forzar una victoria o un empate. Tres en Raya se utiliza a
                menudo como introducción a la teoría de juegos y a la inteligencia artificial debido a su número finito de posibles estados de juego.
            `, commonStrategies: 'Estrategias comunes',
            commonStrategiesContent: 'Aunque el Tres en Raya es un juego sencillo, dominarlo requiere pensamiento estratégico. Aquí tienes algunas estrategias clave para aumentar tus posibilidades de ganar:',
            cornerOpening: 'Apertura de esquina: Siempre intenta empezar en una esquina. Esto suele darte mejores posibilidades de crear múltiples líneas ganadoras.',
            centerControl: 'Control del centro: Tomar el cuadrado central es un movimiento fuerte, ya que maximiza tus opciones para formar una línea ganadora.',
            blockingOpponent: 'Bloquear a tu oponente: Siempre busca los posibles movimientos ganadores de tu oponente y bloquéales antes de que puedan completar una fila.',
            forkingStrategy: 'Estrategia de bifurcación: Una bifurcación es cuando creas dos posibles movimientos ganadores al mismo tiempo. Tu oponente solo puede bloquear uno, lo que lleva a tu victoria.',
            avoidingLosses: 'Evitar pérdidas forzadas: Si tu oponente consigue dos marcas seguidas con un espacio vacío restante, debes bloquearlo inmediatamente.',
            localPvPMode: 'Modo Jugador vs Jugador Local',
            localPvPModeContent: `
                En el modo Jugador contra Jugador local, dos jugadores se turnan para hacer movimientos en el mismo dispositivo.
                Este modo ofrece flexibilidad en la configuración del juego para personalizar la experiencia.<br><br>
                
                <b>Configuración del juego:</b>
            `, boardSizeDesc: 'Tamaño de la tabela: Elija un tamaño de tablero entre 3×3 y 10×10. Los tableros más grandes crean partidas más largas y estratégicas.',
            startingPlayerDesc: 'Jugador inicial: Seleccione si X o O hace el primer movimiento. El primer jugador suele tener una ligera ventaja.',
            howToPlay: 'Cómo jugar:',
            howToPlay1: 'Los jugadores se turnan para colocar su símbolo (X o O) en una celda vacía.',
            howToPlay2: 'El objetivo es alinear un número específico de símbolos en una fila, columna o diagonal:',
            howToPlay3: 'Para un tablero de 3×3: Consigue 3 en línea para ganar.',
            howToPlay4: 'Para tableros más grandes: Consigue n en línea para ganar (n es el tamaño del tablero).',
            howToPlay5: 'Si el tablero se llena sin un ganador, el juego termina en empate.',
            onlinePvPMode: 'Modo Jugador vs Jugador en Línea',
            onlinePvPContent: `
                En el modo 1v1 en línea, los jugadores pueden desafiar a oponentes a través de internet. Puedes crear o unirte a partidas y personalizar la
                configuración para una experiencia óptima.<br><br>
                
                <b>Creación de una partida</b><br>
                Al crear una partida, puedes elegir entre las siguientes opciones de visibilidad:
            `, publicDesc: 'Público: El juego aparece en la lista de juegos públicos, lo que permite a cualquiera unirse.',
            unlistedDesc: 'No listado: El juego no aparece en la lista pública, pero se puede unir mediante el código del juego o la URL directa.',
            privateDesc: 'Privado: El juego requiere una contraseña para entrar, asegurando que solo los jugadores invitados puedan unirse.',
            onlinePvPContent1: 'También puedes establecer al jugador inicial como:',
            xStart: 'X (siempre empieza)',
            oStart: 'O (siempre empieza)',
            randomStart: 'Aleatorio (decide al azar quién empieza)',
            afterCreating: `
                Después de crear una partida, entrarás en la Sala de Juego, donde el anfitrión puede asignar el símbolo de cada jugador (X o O) antes de comenzar el partido.<br><br>
                
                <b>Unirse a una partida</b><br>
                Puedes unirte a una partida de tres maneras:
            `, selectPublicList: 'Seleccionando una partida de la lista pública (para partidas públicas).',
            enterGameCode: 'Ingresando un código de juego (para partidas no listadas o privadas).',
            useDirectUrl: 'Usando un enlace directo compartido por el creador del juego (actualmente solo para juegos públicos o no listados).',
            gameplay: 'Jugabilidad',
            standardRules: 'El juego sigue las reglas estándar del Tres en Raya, con los jugadores turnándose para colocar su símbolo en el tablero.',
            winCondition: 'El primer jugador en conseguir 3 en línea gana.',
            drawCondition: 'Si el tablero se llena sin un ganador, el juego termina en empate.',
            playerVsBotMode: 'Modo Jugador vs Bot',
            playerVsBotContent: `
                En el modo Jugador contra Bot, puedes desafiar a un oponente de la computadora con diferentes niveles de dificultad. 
                ¡Personaliza la configuración del juego y pon a prueba tus habilidades contra bots cada vez más desafiantes!<br><br>

                <b>Configuración del juego</b>
            `, vsBotStarting: 'Jugador inicial: Puedes elegir si tú o el bot empieza primero. El bot siempre juega como X.',
            vsBotWinCondition: 'Condiciones de victoria: El primero en conseguir 3 en línea gana.',
            botDifficultyLevels: 'Niveles de dificultad del bot',
            botDifficultyEasy: '<b>Fácil (Aleatorio)</b> – El bot hace movimientos completamente aleatorios, ofreciendo poco o ningún desafío.',
            botDifficultyMedium: '<b>Medio (Estrategia básica)</b> – El bot sigue reglas simples:',
            botDifficultyImpossible: '<b>Imposible (Algoritmo Minimax)</b> – El bot utiliza el algoritmo Minimax, lo que significa que juega perfectamente y no puede perder.',
            botDifficultyAI: `
                <b>IA (Gemini 2.0 Flash Lite)</b> – El bot utiliza el modelo de lenguaje Gemini 2.0 Flash Lite para predecir movimientos, pero como a veces elige 
                casillas ocupadas, recurre a la estrategia del bot de dificultad media cuando es necesario. Esto hace que la IA combine elementos de juego impredecibles y estratégicos.
            `, winIfPossible: 'Gana si es posible.',
            blockOpponentsMove: 'Si no es posible ganar, bloquea el movimiento ganador del oponente.',
            makeRandomMove: 'Si ninguna de las anteriores se aplica, haz un movimiento aleatorio.',
            turnsAlternate: 'Los turnos se alternan entre tú y el bot.',
            botMakesMove: 'El bot hace su movimiento instantáneamente cuando le toca.',
            endsInDraw: 'Si el tablero se llena sin un ganador, el juego termina en empate.'
        }
    },
    it: {
        name: "Italiano",
        flag: "https://flagsapi.com/IT/flat/32.png",
        translations: {
            title: "Gioco del tris",
            selectMode: 'Seleziona modalità:',
            pvpLocal: 'PvP (Locale)',
            pvpOnline: 'PvP (Online)',
            vsBot: 'Contro Bot',
            boardSize: 'Seleziona la dimensione della griglia:',
            botDifficulty: 'Seleziona la difficoltà del bot:',
            difficultyEasy: 'Facile',
            difficultyMedium: 'Medio',
            difficultyImpossible: 'Impossibile',
            difficultyAI: 'AI',
            startingPlayer: 'Giocatore iniziale:',
            startGame: 'Inizia partita',
            restartGame: 'Gioca di nuovo',
            nowPlaying: 'Ora sta giocando:',
            enemyThinking: 'Il nemico sta pensando...',
            gameTie: 'È un pareggio!',
            gameWin: 'Giocatore {player} vince!',
            gameWon: 'Hai vinto!',
            createOnlineGame: 'Crea gioco',
            joinOnlineGame: 'Unisciti al gioco',
            noGamesFound: 'Nessun gioco trovato',
            gameName: 'Nome del gioco:',
            gameVisibility: 'Visibilità del gioco:',
            public: 'Pubblico',
            unlisted: 'Non elencato',
            private: 'Privato',
            gamePassword: 'Password del gioco:',
            gameCode: 'Codice del gioco:',
            password: 'Password:',
            leaveGame: 'Lascia',
            leaveGameConfirm: 'Sei sicuro di voler lasciare il gioco?',
            yes: 'Sì',
            no: 'No',
            player: 'giocatore',
            players: 'giocatori',
            ready: 'Pronto',
            notReady: 'Non pronto',
            waitingForPlayers: 'In attesa di giocatori...',
            copyLink: 'Link di unione copiato negli appunti',
            copyCode: 'Codice del gioco copiato negli appunti',
            invalidSize: 'Dimensione della griglia non valida. Seleziona una dimensione tra 3 e 10.',
            invalidGameName: 'Formato del nome del gioco non valido. Utilizzare solo lettere, numeri e spazi. La lunghezza deve essere compresa tra 3 e 20 caratteri.',
            invalidPasswordFormat: 'Formato password non valido. Utilizzare solo lettere, numeri e caratteri speciali. La lunghezza deve essere compresa tra 6 e 20 caratteri.',
            invalidGameCode: 'Formato del codice del gioco non valido. Utilizzare solo lettere e numeri. La lunghezza deve essere di 6 caratteri.',
            badRequest: 'Si è verificato un errore durante l\'unione al gioco. (Richiesta errata)',
            unauthorized: 'Autenticazione fallita, riprova.',
            forbidden: 'Non sei autorizzato a unirti a questo gioco.',
            notFound: 'Impossibile trovare il gioco.',
            internalServerError: 'Si è verificato un errore durante l\'unione al gioco.',
            notAllowed: 'Non sei autorizzato a eseguire questa azione.',
            gameNotFound: 'Gioco non trovato. Controlla il codice e riprova.',
            aiMoveError: 'Si è verificato un errore durante il recupero della mossa AI.',
            createGameError: 'Si è verificato un errore durante la creazione del gioco online.',
            joinGameError: 'Si è verificato un errore durante l\'unione al gioco online.',
            listGamesError: 'Si è verificato un errore durante il recupero dell\'elenco dei giochi online.',
            helpHeader: 'Come si gioca?',
            game: 'Gioco',
            online: 'Online',
            about: 'Su di me',
            generalInfo: 'Informazioni Generali',
            generalInfoContent: `
                Gioco del tris è un gioco semplice ma strategico per due giocatori, giocato su una griglia 3x3. I giocatori si alternano nel segnare una casella con il loro simbolo - "X" o "O".
                L'obiettivo è formare una linea retta di tre dei loro simboli, sia orizzontalmente, verticalmente o diagonalmente.<br><br>
            
                Nonostante la sua semplicità, il gioco stimola il pensiero logico e la strategia, poiché un giocatore ottimale può sempre forzare una vittoria o un pareggio. Gioco del tris
                è spesso utilizzato come introduzione alla teoria dei giochi e all'intelligenza artificiale, grazie al numero finito di possibili stati di gioco.
            `, commonStrategies: 'Strategie Comuni',
            commonStrategiesContent: 'Sebbene Gioco del tris sia un gioco semplice, dominarlo richiede un pensiero strategico. Ecco alcune strategie chiave per aumentare le tue possibilità di vittoria:',
            cornerOpening: 'Apertura nell\'Angolo: Cerca sempre di iniziare in un angolo. Questo ti dà spesso migliori possibilità di creare più linee vincenti.',
            centerControl: 'Controllo del Centro: Prendere la casella centrale è una mossa forte, poiché massimizza le tue opzioni per formare una linea vincente.',
            blockingOpponent: 'Bloccare l\'Avversario: Cerca sempre i possibili movimenti vincenti del tuo avversario e bloccalo prima che possa completare una fila.',
            forkingStrategy: 'Strategia Forking: Un fork è quando crei due possibili mosse vincenti contemporaneamente. Il tuo avversario può bloccarne solo una, portando alla tua vittoria.',
            avoidingLosses: 'Evitare Le Perdita Forzata: Se il tuo avversario ottiene due segni in una riga con uno spazio vuoto, devi bloccarlo immediatamente.',
            localPvPMode: 'Modalità Giocatore Locale contro Giocatore',
            localPvPModeContent: `
                Nella modalità Giocatore Locale contro Giocatore, due giocatori si alternano nel fare mosse sullo stesso dispositivo. Questa modalità offre flessibilità nelle impostazioni del gioco per personalizzare l'esperienza.<br><br>
            
                <b>Impostazioni del Gioco:</b>
            `, boardSizeDesc: 'Dimensione del Tabellone: Scegli una dimensione del tabellone tra 3x3 e 10x10. I tabelloni più grandi creano partite più lunghe e strategiche.',
            startingPlayerDesc: "Giocatore Iniziale: Seleziona se X o O fa la prima mossa. Il primo giocatore di solito ha un piccolo vantaggio.",
            howToPlay: 'Come Giocare:',
            howToPlay1: 'I giocatori si alternano nel fare mosse, posizionando il loro simbolo (X o O) su una cella vuota.',
            howToPlay2: 'L\'obiettivo è allineare un numero specifico di simboli in una riga, colonna o diagonale:',
            howToPlay3: 'Per un tabellone 3x3: Ottieni 3 in fila per vincere.',
            howToPlay4: 'Per tabelloni più grandi: Ottieni n in fila per vincere (n è la dimensione del tabellone).',
            howToPlay5: 'Se il tabellone si riempie senza un vincitore, la partita termina in pareggio.',
            onlinePvPMode: 'Modalità Giocatore Online contro Giocatore',
            onlinePvPContent: `
                Nella modalità Online 1v1, i giocatori possono sfidare avversari tramite internet. Puoi creare o unirti a partite e personalizzare le impostazioni per un'esperienza ottimale.<br><br>
            
                <b>Creazione di una Partita</b><br>
                Quando crei una partita, puoi scegliere tra le seguenti opzioni di visibilità:
            `, publicDesc: 'Pubblico: La partita appare nella lista delle partite pubbliche, consentendo a chiunque di unirsi.',
            unlistedDesc: 'Non elencata: La partita non appare nella lista pubblica, ma può essere unita tramite codice di gioco o URL diretto.',
            privateDesc: 'Privata: La partita richiede una password per entrare, garantendo che solo i giocatori invitati possano partecipare.',
            onlinePvPContent1: 'Puoi anche impostare il giocatore iniziale come:',
            xStart: 'X (inizia sempre)',
            oStart: 'O (inizia sempre)',
            randomStart: 'Casuale (decide casualmente chi inizia)',
            afterCreating: `
                Dopo aver creato una partita, entrerai nel Game Lobby, dove il proprietario della partita può assegnare il simbolo di ogni giocatore (X o O) prima di iniziare la partita.<br><br>
            
                <b>Unirsi a una Partita</b><br>
                Puoi unirti a una partita in tre modi:
            `,
            selectPublicList: 'Selezionando una partita dalla lista pubblica (per partite pubbliche).',
            enterGameCode: 'Inserendo un codice di gioco (per partite non elencate o private).',
            useDirectUrl: 'Usando un URL diretto condiviso dal creatore del gioco (attualmente solo per partite pubbliche o non elencate).',
            gameplay: 'Gameplay',
            standardRules: 'Il gioco segue le regole standard di Gioco del tris, con i giocatori che si alternano nel posizionare il loro simbolo sul tabellone.',
            winCondition: 'Il primo giocatore che ottiene 3 in fila vince.',
            drawCondition: 'Se il tabellone si riempie senza un vincitore, la partita termina in pareggio.',
            playerVsBotMode: 'Modalità Giocatore contro Bot',
            playerVsBotContent: `
                Nella modalità Giocatore contro Bot, puoi sfidare un avversario computerizzato con diversi livelli di difficoltà. Personalizza le impostazioni del gioco e
                metti alla prova le tue abilità contro bot sempre più impegnativi!<br><br>
            
                <b>Impostazioni del Gioco</b>
            `, vsBotStarting: 'Giocatore Iniziale: Puoi scegliere se iniziare tu o il bot. Il bot gioca sempre come X.',
            vsBotWinCondition: 'Condizioni di Vittoria: Il primo a ottenere 3 in fila vince.',
            botDifficultyLevels: 'Livelli di Difficoltà del Bot',
            botDifficultyEasy: '<b>Facile (Casuale)</b> – Il bot fa mosse completamente casuali, offrendo poca o nessuna sfida.',
            botDifficultyMedium: '<b>Medio (Strategia di Base)</b> – Il bot segue regole semplici:',
            botDifficultyImpossible: '<b>Impossibile (Algoritmo Minimax)</b> – Il bot utilizza l\'algoritmo Minimax, il che significa che gioca perfettamente e non può perdere.',
            botDifficultyAI: `
                <b>IA (Gemini 2.0 Flash Lite)</b> – Il bot utilizza un modello di linguaggio Gemini 2.0 Flash Lite per prevedere le mosse, ma poiché a volte sceglie
                celle occupate, ricorre alla strategia del bot di difficoltà media quando necessario. Questo rende l'IA un mix di gioco imprevedibile e strategico.
            `, winIfPossible: 'Vinci se possibile.',
            blockOpponentsMove: 'Se vincere non è possibile, blocca la mossa vincente dell\'avversario.',
            makeRandomMove: 'Se nessuna delle due condizioni si applica, fai una mossa casuale.',
            turnsAlternate: 'I turni si alternano tra te e il bot.',
            botMakesMove: 'Il bot fa istantaneamente la sua mossa quando è il suo turno.',
            endsInDraw: 'Se il tabellone si riempie senza un vincitore, la partita termina in pareggio.'
        }
    },
    cs: {
        name: "Čeština",
        flag: "https://flagsapi.com/CZ/flat/32.png",
        translations: {
            title: "Piškvorky",
            selectMode: 'Vyberte režim:',
            pvpLocal: 'PvP (Místní)',
            pvpOnline: 'PvP (Online)',
            vsBot: 'Proti botovi',
            boardSize: 'Vyberte velikost hrací desky:',
            botDifficulty: 'Vyberte obtížnost bota:',
            difficultyEasy: 'Snadná',
            difficultyMedium: 'Střední',
            difficultyImpossible: 'Nemožné',
            difficultyAI: 'AI',
            startingPlayer: 'Začínající hráč:',
            startGame: 'Začít hru',
            restartGame: 'Hrát znovu',
            nowPlaying: 'Právě hraje:',
            enemyThinking: 'Nepřítel přemýšlí...',
            gameTie: 'Remíza!',
            gameWin: 'Hráč {player} vyhrál!',
            gameWon: 'Vyhrál jsi!',
            createOnlineGame: 'Vytvořit hru',
            joinOnlineGame: 'Připojit se ke hře',
            noGamesFound: 'Nebyly nalezeny žádné hry',
            gameName: 'Název hry:',
            gameVisibility: 'Viditelnost hry:',
            public: 'Veřejné',
            unlisted: 'Neveřejné',
            private: 'Soukromé',
            gamePassword: 'Heslo hry:',
            gameCode: 'Kód hry:',
            password: 'Heslo:',
            leaveGame: 'Odejít',
            leaveGameConfirm: 'Opravdu chcete odejít z hry?',
            yes: 'Ano',
            no: 'Ne',
            player: 'hráč',
            players: 'hráči',
            ready: 'Připraven',
            notReady: 'Nepřipraven',
            waitingForPlayers: 'Čekání na hráče...',
            copyLink: 'Odkaz na připojení zkopírován do schránky',
            copyCode: 'Kód hry zkopírován do schránky',
            invalidSize: 'Neplatná velikost hrací desky. Vyberte velikost mezi 3 a 10.',
            invalidGameName: 'Neplatný formát názvu hry. Použijte pouze písmena, čísla a mezery. Délka musí být mezi 3 a 20 znaky.',
            invalidPasswordFormat: 'Neplatný formát hesla. Použijte pouze písmena, čísla a speciální znaky. Délka musí být mezi 6 a 20 znaky.',
            invalidGameCode: 'Neplatný formát kódu hry. Použijte pouze písmena a čísla. Délka musí být 6 znaků.',
            badRequest: 'Při připojování k hře došlo k chybě. (Špatný požadavek)',
            unauthorized: 'Autentizace se nezdařila, zkuste to znovu.',
            forbidden: 'Nemáte povolení připojit se k této hře.',
            notFound: 'Hru se nepodařilo najít.',
            internalServerError: 'Při připojování k hře došlo k chybě.',
            notAllowed: 'Nemáte povolení provést tuto akci.',
            gameNotFound: 'Hra nebyla nalezena. Zkontrolujte kód a zkuste to znovu.',
            aiMoveError: 'Při získávání tahu AI došlo k chybě.',
            createGameError: 'Při vytváření online hry došlo k chybě.',
            joinGameError: 'Při připojování k online hře došlo k chybě.',
            listGamesError: 'Při získávání seznamu online her došlo k chybě.',
            helpHeader: 'Jak hrát?',
            game: 'Hra',
            online: 'Online',
            about: 'O mně',
            generalInfo: 'Obecné informace',
            generalInfoContent: `
                Piškvorky je jednoduchá, ale strategická hra pro dva hráče, která se hraje na mřížce 3x3. Hráči se střídají ve značení čtverců svým symbolem - "X" nebo "O".
                Cílem je vytvořit přímou čáru ze tří svých symbolů, buď horizontálně, vertikálně, nebo diagonálně.<br><br>

                I přes svou jednoduchost hra podporuje logické myšlení a strategii, protože optimální hráč může vždy donutit k výhře nebo remíze. Piškvorky
                je často používána jako úvod do teorie her a umělé inteligence díky svému konečnému počtu možných herních stavů.
            `, commonStrategies: 'Obvyklé strategie',
            commonStrategiesContent: 'I když je Piškvorky jednoduchá hra, její zvládnutí vyžaduje strategické myšlení. Zde jsou některé klíčové strategie, jak zvýšit své šance na výhru:',
            cornerOpening: 'Otevření v rohu: Vždy se snažte začít v rohu. To vám často dává lepší šance vytvořit více výherních linií.',
            centerControl: 'Kontrola středu: Získání středu je silný tah, protože maximalizuje vaše možnosti pro vytvoření výherní linie.',
            blockingOpponent: 'Blokování soupeře: Vždy sledujte potenciální výherné tahy soupeře a zablokujte je, než dokončí řadu.',
            forkingStrategy: 'Forková strategie: Fork je situace, kdy vytvoříte dvě možné výherní tahy současně. Váš soupeř může blokovat pouze jeden, což vede k vaší výhře.',
            avoidingLosses: 'Vyhnutí se nuceným prohrám: Pokud váš soupeř získá dvě značky v řadě s prázdným prostorem, musíte ho okamžitě zablokovat.',
            localPvPMode: 'Mód Lokální Hráč vs Hráč',
            localPvPModeContent: `
                V režimu Lokální Hráč vs Hráč se dva hráči střídají v tazích na stejném zařízení. Tento režim nabízí flexibilitu v nastavení hry pro přizpůsobení zážitku.<br><br>

                <b>Nastavení hry:</b>
            `, boardSizeDesc: 'Velikost desky: Vyberte velikost desky mezi 3×3 a 10×10. Větší desky vytvářejí delší a strategičtější zápasy.',
            startingPlayerDesc: 'Počáteční hráč: Zvolte, zda X nebo O začne hru. První hráč obvykle má mírnou výhodu.',
            howToPlay: 'Jak hrát:',
            howToPlay1: 'Hráči se střídají v tazích, umisťují svůj symbol (X nebo O) na prázdnou buňku.',
            howToPlay2: 'Cílem je seřadit určité množství symbolů v řadě, sloupci nebo diagonále:',
            howToPlay3: 'Pro desku 3×3: Získejte 3 v řadě pro výhru.',
            howToPlay4: 'Pro větší desky: Získejte n v řadě pro výhru (n je velikost desky).',
            howToPlay5: 'Pokud deska zaplní a není vítěz, hra končí remízou.',
            onlinePvPMode: 'Mód Online Hráč vs Hráč',
            onlinePvPContent: `
                V režimu Online 1v1 mohou hráči vyzvat soupeře přes internet. Můžete vytvářet nebo připojovat se k hrám a přizpůsobit nastavení pro optimální zážitek.<br><br>

                <b>Vytvoření hry</b><br>
                Při vytváření hry si můžete vybrat z následujících možností viditelnosti:
            `, publicDesc: 'Veřejná: Hra se objeví v seznamu veřejných her, což umožňuje komukoli se připojit.',
            unlistedDesc: 'Nezařazená: Hra se neobjeví v veřejném seznamu, ale lze se k ní připojit pomocí herního kódu nebo přímého odkazu.',
            privateDesc: 'Soukromá: Hra vyžaduje heslo pro vstup, což zajišťuje, že se mohou připojit pouze pozvaní hráči.',
            onlinePvPContent1: 'Můžete také nastavit počátečního hráče jako:',
            xStart: 'X (vždy začíná)',
            oStart: 'O (vždy začíná)',
            randomStart: 'Náhodně (náhodně rozhodne, kdo začne)',
            afterCreating: `
                Po vytvoření hry vstoupíte do herní haly, kde si majitel hry může přiřadit symbol každého hráče (X nebo O) před zahájením zápasu.<br><br>

                <b>Připojení ke hře</b><br>
                Můžete se připojit k hře třemi způsoby:
            `, selectPublicList: 'Výběr hry z veřejného seznamu (pro veřejné hry).',
            enterGameCode: 'Zadání herního kódu (pro nezařazené nebo soukromé hry).',
            useDirectUrl: 'Použití přímého odkazu, který sdílel tvůrce hry (v současnosti pouze pro veřejné nebo nezařazené hry).',
            gameplay: 'Herní průběh',
            standardRules: 'Hra následuje standardní pravidla Piškvorky, hráči se střídají ve vkládání svého symbolu na desku.',
            winCondition: 'První hráč, který získá 3 v řadě, vyhrává.',
            drawCondition: 'Pokud deska zaplní a není vítěz, hra končí remízou.',
            playerVsBotMode: 'Mód Hráč vs Bot',
            playerVsBotContent: `
                V režimu Hráč vs Bot si můžete vyzvat počítačového soupeře s různými úrovněmi obtížnosti. Přizpůsobte nastavení hry a
                testujte své dovednosti proti stále náročnějším botům!<br><br>

                <b>Nastavení hry</b>
            `, vsBotStarting: 'Počáteční hráč: Můžete si vybrat, zda začnete vy nebo bot. Bot vždy hraje jako X.',
            vsBotWinCondition: 'Podmínky výhry: První, kdo získá 3 v řadě, vyhrává.',
            botDifficultyLevels: 'Úrovně obtížnosti bota',
            botDifficultyEasy: '<b>Snadná (náhodná)</b> – Bot dělá úplně náhodné tahy, což nabízí malou až žádnou výzvu.',
            botDifficultyMedium: '<b>Střední (základní strategie)</b> – Bot následuje jednoduchá pravidla:',
            botDifficultyImpossible: '<b>Imposible (algoritmus Minimax)</b> – Bot používá algoritmus Minimax, což znamená, že hraje dokonale a nemůže prohrát.',
            botDifficultyAI: `
                <b>AI (Gemini 2.0 Flash Lite)</b> – Bot používá model Gemini 2.0 Flash Lite k předpovědi tahů, ale protože někdy vybírá obsazené buňky,
                vrací se ke strategii Středního bota, když je to nutné. Tím je AI kombinací nepředvídatelného a strategického hraní.
            `, winIfPossible: 'Vyhrajte, pokud je to možné.',
            blockOpponentsMove: 'Pokud není možné vyhrát, blokujte soupeřův výherní tah.',
            makeRandomMove: 'Pokud žádná z možností neplatí, udělejte náhodný tah.',
            turnsAlternate: 'Tah se střídá mezi vámi a botem.',
            botMakesMove: 'Bot okamžitě provede svůj tah, když je jeho řada.',
            endsInDraw: 'Pokud deska zaplní a není vítěz, hra končí remízou.'
        }
    },
    el: {
        name: "Έλληνικά",
        flag: "https://flagsapi.com/GR/flat/32.png",
        translations: {
            title: "Τρίλιζα",
            selectMode: 'Επιλέξτε λειτουργία:',
            pvpLocal: 'PvP (Τοπικό)',
            pvpOnline: 'PvP (Διαδικτυακό)',
            vsBot: 'Εναντίον Bot',
            boardSize: 'Επιλέξτε το μέγεθος του πίνακα:',
            botDifficulty: 'Επιλέξτε τη δυσκολία του bot:',
            difficultyEasy: 'Εύκολο',
            difficultyMedium: 'Μέτριο',
            difficultyImpossible: 'Αδύνατο',
            difficultyAI: 'AI',
            startingPlayer: 'Αρχικός παίκτης:',
            startGame: 'Έναρξη παιχνιδιού',
            restartGame: 'Παίξε ξανά',
            nowPlaying: 'Τώρα παίζει:',
            enemyThinking: 'Ο εχθρός σκέφτεται...',
            gameTie: 'Είναι ισοπαλία!',
            gameWin: 'Ο Παίκτης {player} κερδίζει!',
            gameWon: 'Κέρδισες!',
            createOnlineGame: 'Δημιουργία παιχνιδιού',
            joinOnlineGame: 'Συμμετοχή στο παιχνίδι',
            noGamesFound: 'Δεν βρέθηκαν παιχνίδια',
            gameName: 'Όνομα παιχνιδιού:',
            gameVisibility: 'Ορατότητα παιχνιδιού:',
            public: 'Δημόσιο',
            unlisted: 'Μη δημόσιο',
            private: 'Ιδιωτικό',
            gamePassword: 'Κωδικός παιχνιδιού:',
            gameCode: 'Κωδικός παιχνιδιού:',
            password: 'Κωδικός:',
            leaveGame: 'Αφήστε',
            leaveGameConfirm: 'Είστε σίγουροι ότι θέλετε να αφήσετε το παιχνίδι?',
            yes: 'Ναί',
            no: 'Όχι',
            player: 'παίκτης',
            players: 'παίκτες',
            ready: 'Έτοιμος',
            notReady: 'Μη έτοιμος',
            waitingForPlayers: 'Αναμονή για παίκτες...',
            copyLink: 'Ο σύνδεσμος συμμετοχής αντιγράφηκε στο πρόχειρο',
            copyCode: 'Ο κωδικός παιχνιδιού αντιγράφηκε στο πρόχειρο',
            invalidSize: 'Μη έγκυρο μέγεθος πίνακα. Επιλέξτε μέγεθος μεταξύ 3 και 10.',
            invalidGameName: 'Μη έγκυρη μορφή ονόματος παιχνιδιού. Χρησιμοποιήστε μόνο γράμματα, αριθμούς και κενά. Το μήκος πρέπει να είναι μεταξύ 3 και 20 χαρακτήρων.',
            invalidPasswordFormat: 'Μη έγκυρη μορφή κωδικού πρόσβασης. Χρησιμοποιήστε μόνο γράμματα, αριθμούς και ειδικούς χαρακτήρες. Το μήκος πρέπει να είναι μεταξύ 6 και 20 χαρακτήρων.',
            invalidGameCode: 'Μη έγκυρη μορφή κωδικού παιχνιδιού. Χρησιμοποιήστε μόνο γράμματα και αριθμούς. Το μήκος πρέπει να είναι 6 χαρακτήρες.',
            badRequest: 'Παρουσιάστηκε σφάλμα κατά τη συμμετοχή στο παιχνίδι. (Λανθασμένο αίτημα)',
            unauthorized: 'Αποτυχία πιστοποίησης, παρακαλώ δοκιμάστε ξανά.',
            forbidden: 'Δεν σας επιτρέπεται να συμμετάσχετε σε αυτό το παιχνίδι.',
            notFound: 'Δεν ήταν δυνατή η εύρεση του παιχνιδιού.',
            internalServerError: 'Παρουσιάστηκε σφάλμα κατά τη συμμετοχή στο παιχνίδι.',
            notAllowed: 'Δεν σας επιτρέπεται να εκτελέσετε αυτήν την ενέργεια.',
            gameNotFound: 'Παιχνίδι δεν βρέθηκε. Ελέγξτε τον κωδικό και δοκιμάστε ξανά.',
            aiMoveError: 'Παρουσιάστηκε σφάλμα κατά τη λήψη της κίνησης AI.',
            createGameError: 'Παρουσιάστηκε σφάλμα κατά τη δημιουργία του διαδικτυακού παιχνιδιού.',
            joinGameError: 'Παρουσιάστηκε σφάλμα κατά τη συμμετοχή στο διαδικτυακό παιχνίδι.',
            listGamesError: 'Παρουσιάστηκε σφάλμα κατά τη λήψη της λίστας των διαδικτυακών παιχνιδιών.',
            helpHeader: 'Πώς να παίξετε?',
            game: 'Παιχνίδι',
            online: 'Διαδικτυακό',
            about: 'Σχετικά με εμένα',
            generalInfo: 'Γενικές Πληροφορίες',
            generalInfoContent: `
                Το παιχνίδι Τρίλιζα είναι ένα απλό αλλά στρατηγικό παιχνίδι για δύο παίκτες που παίζεται σε έναν πίνακα 3x3. Οι παίκτες παίρνουν εναλλάξ τοποθετώντας το σύμβολό τους - "Χ" ή "Ο".
                Ο στόχος είναι να σχηματίσουν μια ευθεία γραμμή με τρία από τα σύμβολά τους, είτε οριζόντια, κάθετα ή διαγώνια.<br><br>
            
                Παρά την απλότητά του, το παιχνίδι ενθαρρύνει τη λογική σκέψη και τη στρατηγική, καθώς ένας βέλτιστος παίκτης μπορεί πάντα να εξαναγκάσει μια νίκη ή ισοπαλία. Το Τρίλιζα
                χρησιμοποιείται συχνά ως εισαγωγή στη θεωρία παιγνίων και την τεχνητή νοημοσύνη λόγω του πεπερασμένου αριθμού των πιθανών καταστάσεων του παιχνιδιού.
            `, commonStrategies: 'Κοινές Στρατηγικές',
            commonStrategiesContent: 'Παρά το γεγονός ότι το Τρίλιζα είναι ένα απλό παιχνίδι, η εξοικείωση με αυτό απαιτεί στρατηγική σκέψη. Εδώ είναι μερικές βασικές στρατηγικές για να αυξήσετε τις πιθανότητες νίκης σας:',
            cornerOpening: 'Άνοιγμα στη Γωνία: Προσπαθήστε πάντα να ξεκινήσετε σε μια γωνία. Αυτό συνήθως σας δίνει καλύτερες πιθανότητες για τη δημιουργία πολλαπλών γραμμών νίκης.',
            centerControl: 'Έλεγχος Κέντρου: Το να πάρετε το κεντρικό τετράγωνο είναι μια ισχυρή κίνηση, καθώς μεγιστοποιεί τις επιλογές σας για να σχηματίσετε μια γραμμή νίκης.',
            blockingOpponent: 'Αποκλεισμός Αντιπάλου: Πάντα να ψάχνετε για τις πιθανές κινήσεις νίκης του αντιπάλου και να τις αποκλείετε πριν προλάβει να ολοκληρώσει μια γραμμή.',
            forkingStrategy: 'Στρατηγική Χωρίσματος: Το χωρίσμα είναι όταν δημιουργείτε δύο πιθανές κινήσεις νίκης ταυτόχρονα. Ο αντίπαλός σας μπορεί να αποκλείσει μόνο μία, οδηγώντας στη νίκη σας.',
            avoidingLosses: 'Αποφυγή Υποχρεωμένων Ηττών: Αν ο αντίπαλος έχει δύο σημάδια σε σειρά με ένα κενό, πρέπει να το αποκλείσετε αμέσως.',
            localPvPMode: 'Τοπικό τρόπος Παίκτη vs Παίκτη',
            localPvPModeContent: `
                Στο Τοπικό τρόπος Παίκτη vs Παίκτη, δύο παίκτες παίρνουν εναλλάξ κινήσεις στην ίδια συσκευή. Αυτός ο τρόπος προσφέρει ευελιξία στις ρυθμίσεις του παιχνιδιού για να προσαρμόσετε την εμπειρία.<br><br>
            
                <b>Ρυθμίσεις Παιχνιδιού:</b>
            `, boardSizeDesc: 'Μέγεθος Πίνακα: Επιλέξτε το μέγεθος του πίνακα μεταξύ 3×3 και 10×10. Μεγαλύτεροι πίνακες δημιουργούν μεγαλύτερους, πιο στρατηγικούς αγώνες.',
            startingPlayerDesc: 'Πρώτος Παίκτης: Επιλέξτε αν ο Χ ή ο Ο θα κάνει την πρώτη κίνηση. Ο πρώτος παίκτης συνήθως έχει ένα μικρό πλεονέκτημα.',
            howToPlay: 'Πώς να Παίξετε:',
            howToPlay1: 'Οι παίκτες εναλλάσσονται σε κινήσεις, τοποθετώντας το σύμβολό τους (Χ ή Ο) σε ένα κενό κελί.',
            howToPlay2: 'Ο στόχος είναι να ευθυγραμμίσετε έναν συγκεκριμένο αριθμό συμβόλων σε σειρά, στήλη ή διαγώνιο:',
            howToPlay3: 'Για έναν πίνακα 3×3: Κερδίστε 3 στη σειρά για να νικήσετε.',
            howToPlay4: 'Για μεγαλύτερους πίνακες: Κερδίστε n στη σειρά για να νικήσετε (n είναι το μέγεθος του πίνακα).',
            howToPlay5: 'Αν ο πίνακας γεμίσει χωρίς νικητή, το παιχνίδι τελειώνει ισόπαλο.',
            onlinePvPMode: 'Online τρόπος Παίκτη vs Παίκτη',
            onlinePvPContent: `
                Στον Online τρόπος 1v1, οι παίκτες μπορούν να προκλήσουν αντιπάλους μέσω του διαδικτύου. Μπορείτε να δημιουργήσετε ή να συμμετάσχετε σε παιχνίδια και να προσαρμόσετε τις ρυθμίσεις για μια βέλτιστη εμπειρία.<br><br>
            
                <b>Δημιουργία Παιχνιδιού</b><br>
                Όταν δημιουργείτε ένα παιχνίδι, μπορείτε να επιλέξετε από τις παρακάτω επιλογές ορατότητας:
            `, publicDesc: 'Δημόσιο: Το παιχνίδι εμφανίζεται στη δημόσια λίστα παιχνιδιών, επιτρέποντας σε οποιονδήποτε να συμμετάσχει.',
            unlistedDesc: 'Μη καταχωρημένο: Το παιχνίδι δεν εμφανίζεται στη δημόσια λίστα, αλλά μπορεί να ενταχθεί μέσω κωδικού παιχνιδιού ή άμεσου URL.',
            privateDesc: 'Ιδιωτικό: Το παιχνίδι απαιτεί κωδικό πρόσβασης για να μπείτε, διασφαλίζοντας ότι μόνο οι προσκεκλημένοι παίκτες μπορούν να συμμετάσχουν.',
            onlinePvPContent1: 'Μπορείτε επίσης να ορίσετε τον πρώτο παίκτη ως:',
            xStart: 'Χ (πάντα ξεκινάει)',
            oStart: 'Ο (πάντα ξεκινάει)',
            randomStart: 'Τυχαία (ορίζει τυχαία ποιος ξεκινάει)',
            afterCreating: `
                Μετά τη δημιουργία ενός παιχνιδιού, θα εισέλθετε στο Λόμπι Παιχνιδιού, όπου ο ιδιοκτήτης του παιχνιδιού μπορεί να αναθέσει το σύμβολο κάθε παίκτη (Χ ή Ο) πριν ξεκινήσει ο αγώνας.<br><br>
            
                <b>Συμμετοχή σε Παιχνίδι</b><br>
                Μπορείτε να συμμετάσχετε σε ένα παιχνίδι με τρεις τρόπους:
            `, selectPublicList: 'Επιλέγοντας ένα παιχνίδι από τη δημόσια λίστα (για δημόσια παιχνίδια).',
            enterGameCode: 'Εισάγοντας έναν κωδικό παιχνιδιού (για μη καταχωρημένα ή ιδιωτικά παιχνίδια).',
            useDirectUrl: 'Χρησιμοποιώντας ένα άμεσο URL που μοιράζεται ο δημιουργός του παιχνιδιού (προς το παρόν μόνο για δημόσια ή μη καταχωρημένα παιχνίδια).',
            gameplay: 'Παιχνίδι',
            standardRules: 'Το παιχνίδι ακολουθεί τους κανονισμούς του Τρίλιζα, με τους παίκτες να παίρνουν εναλλάξ κινήσεις για να τοποθετήσουν το σύμβολό τους στον πίνακα.',
            winCondition: 'Ο πρώτος παίκτης που θα βάλει 3 σε σειρά κερδίζει.',
            drawCondition: 'Αν ο πίνακας γεμίσει χωρίς νικητή, το παιχνίδι τελειώνει ισόπαλο.',
            playerVsBotMode: 'Τρόπος Παίκτη vs Ρομπότ',
            playerVsBotContent: `
                Στο τρόπος Παίκτη vs Ρομπότ, μπορείτε να προκλήσετε έναν υπολογιστή αντίπαλο με διάφορα επίπεδα δυσκολίας. Προσαρμόστε τις ρυθμίσεις του παιχνιδιού και
                δοκιμάστε τις ικανότητές σας ενάντια σε ρομπότ όλο και πιο δύσκολα!<br><br>
            
                <b>Ρυθμίσεις Παιχνιδιού</b>
            `, vsBotStarting: 'Πρώτος Παίκτης: Μπορείτε να επιλέξετε αν θα ξεκινήσετε εσείς ή το ρομπότ. Το ρομπότ παίζει πάντα ως Χ.',
            vsBotWinCondition: 'Συνθήκες Νίκης: Ο πρώτος που θα βάλει 3 σε σειρά κερδίζει.',
            botDifficultyLevels: 'Επίπεδα Δυσκολίας Ρομπότ',
            botDifficultyEasy: '<b>Εύκολο (Τυχαίο)</b> – Το ρομπότ κάνει εντελώς τυχαίες κινήσεις, προσφέροντας ελάχιστη ή καμία πρόκληση.',
            botDifficultyMedium: '<b>Μεσαίο (Βασική Στρατηγική)</b> – Το ρομπότ ακολουθεί απλούς κανόνες:',
            botDifficultyImpossible: '<b>Αδύνατο (Αλγόριθμος Minimax)</b> – Το ρομπότ χρησιμοποιεί τον αλγόριθμο Minimax, πράγμα που σημαίνει ότι παίζει τέλεια και δεν μπορεί να χάσει.',
            botDifficultyAI: `
                <b>Τεχνητή Νοημοσύνη (Gemini 2.0 Flash Lite)</b> – Το ρομπότ χρησιμοποιεί το μοντέλο γλώσσας Gemini 2.0 Flash Lite για να προβλέψει τις κινήσεις, αλλά επειδή μερικές φορές επιλέγει κατειλημμένα κελιά,
                επιστρέφει στη στρατηγική του μέσου ρομπότ όταν είναι απαραίτητο. Αυτό καθιστά την ΤΝ ένα μείγμα απρόβλεπτης και στρατηγικής παιγνιδιού.
            `, winIfPossible: 'Νίκησε αν είναι δυνατόν.',
            blockOpponentsMove: 'Αν η νίκη δεν είναι δυνατή, μπλόκαρε την κίνηση νίκης του αντιπάλου.',
            makeRandomMove: 'Αν κανένα από τα δύο δεν ισχύει, κάνε μια τυχαία κίνηση.',
            turnsAlternate: 'Οι γύροι εναλλάσσονται μεταξύ εσένα και του ρομπότ.',
            botMakesMove: 'Το ρομπότ κάνει την κίνησή του αμέσως όταν είναι η σειρά του.',
            endsInDraw: 'Αν ο πίνακας γεμίσει χωρίς νικητή, το παιχνίδι τελειώνει ισόπαλο.'
        }
    },
    ar: {
        name: "عربي",
        flag: "https://flagsapi.com/SA/flat/32.png",
        translations: {
            title: "تيك تاك تو",
            selectMode: 'اختار الوضع:',
            pvpLocal: 'PvP (محلي)',
            pvpOnline: 'PvP (أونلاين)',
            vsBot: 'ضد الروبوت',
            boardSize: 'اختار حجم اللوحة:',
            botDifficulty: 'اختار صعوبة الروبوت:',
            difficultyEasy: 'سهل',
            difficultyMedium: 'متوسط',
            difficultyImpossible: 'مستحيل',
            difficultyAI: 'AI',
            startingPlayer: 'اللاعب الأول:',
            startGame: 'ابدأ اللعبة',
            restartGame: 'إعادة اللعب',
            nowPlaying: 'الآن يلعب:',
            enemyThinking: 'العدو يفكر...',
            gameTie: 'إنها تعادل!',
            gameWin: 'اللاعب {player} يفوز!',
            gameWon: 'لقد فزت!',
            createOnlineGame: 'إنشاء لعبة',
            joinOnlineGame: 'انضم إلى اللعبة',
            noGamesFound: 'لم يتم العثور على ألعاب',
            gameName: 'اسم اللعبة:',
            gameVisibility: 'رؤية اللعبة:',
            public: 'عام',
            unlisted: 'غير مدرج',
            private: 'خاص',
            gamePassword: 'كلمة مرور اللعبة:',
            gameCode: 'رمز اللعبة:',
            password: 'كلمة السر:',
            leaveGame: 'غادر',
            leaveGameConfirm: 'هل أنت متأكد أنك تريد مغادرة اللعبة؟',
            yes: 'نعم',
            no: 'لا',
            player: 'لاعب',
            players: 'لاعبين',
            ready: 'جاهز',
            notReady: 'غير جاهز',
            waitingForPlayers: 'في انتظار اللاعبين...',
            copyLink: 'تم نسخ رابط الانضمام إلى الحافظة',
            copyCode: 'تم نسخ رمز اللعبة إلى الحافظة',
            invalidSize: 'حجم اللوحة غير صالح. يرجى اختيار حجم بين 3 و 10',
            invalidGameName: 'تنسيق اسم اللعبة غير صالح. يرجى استخدام الحروف والأرقام والمسافات فقط. يجب أن يكون الطول بين 3 و 20 حرفًا',
            invalidPasswordFormat: 'تنسيق كلمة المرور غير صالح. يرجى استخدام الحروف والأرقام والرموز الخاصة فقط. يجب أن يكون الطول بين 6 و 20 حرفًا',
            invalidGameCode: 'تنسيق رمز اللعبة غير صالح. يرجى استخدام الحروف والأرقام فقط. يجب أن يكون الطول 6 أحرف',
            badRequest: 'حدث خطأ أثناء الانضمام إلى اللعبة. (طلب غير صحيح)',
            unauthorized: 'فشل التوثيق، يرجى المحاولة مرة أخرى',
            forbidden: 'ليس لديك الإذن للانضمام إلى هذه اللعبة',
            notFound: 'تعذر العثور على اللعبة',
            internalServerError: 'حدث خطأ أثناء الانضمام إلى اللعبة',
            notAllowed: 'ليس لديك الإذن لتنفيذ هذا الإجراء',
            gameNotFound: 'لم يتم العثور على اللعبة. يرجى التحقق من الرمز والمحاولة مرة أخرى',
            aiMoveError: 'حدث خطأ أثناء الحصول على حركة AI',
            createGameError: 'حدث خطأ أثناء إنشاء اللعبة عبر الإنترنت',
            joinGameError: 'حدث خطأ أثناء الانضمام إلى اللعبة عبر الإنترنت',
            listGamesError: 'حدث خطأ أثناء الحصول على قائمة الألعاب عبر الإنترنت',
            helpHeader: 'كيف تلعب؟',
            game: 'لعبة',
            online: 'أونلاين',
            about: 'عني',
            generalInfo: 'معلومات عامة',
            generalInfoContent: `
                إكس-أو هي لعبة بسيطة لكنها تعتمد على الاستراتيجية، تُلعب بين لاعبين على شبكة 3×3. يتناوب اللاعبون على وضع رمزهم - "X" أو "O".
                الهدف هو تشكيل خط مستقيم مكون من ثلاثة رموز متتالية، سواء أفقيًا أو عموديًا أو قطريًا.<br><br>

                على الرغم من بساطتها، فإن اللعبة تشجع على التفكير المنطقي والاستراتيجي، حيث يمكن للاعب المثالي دائمًا فرض الفوز أو التعادل. تُستخدم إكس-أو
                كمدخل لنظرية الألعاب والذكاء الاصطناعي نظرًا لعدد حالاتها الممكنة المحدود.
            `, commonStrategies: 'استراتيجيات شائعة',
            commonStrategiesContent: 'على الرغم من أن إكس-أو لعبة بسيطة، فإن إتقانها يتطلب تفكيرًا استراتيجيًا. إليك بعض الاستراتيجيات الرئيسية لزيادة فرصك في الفوز:',
            cornerOpening: 'البدء من الزاوية: حاول دائمًا أن تبدأ في زاوية، حيث يمنحك ذلك فرصًا أفضل لإنشاء عدة خطوط فوز محتملة.',
            centerControl: 'السيطرة على المركز: أخذ المربع الأوسط يُعد حركة قوية، حيث يتيح لك العديد من الخيارات لتشكيل خط فوز.',
            blockingOpponent: 'إيقاف الخصم: راقب تحركات خصمك وابحث عن فرصه المحتملة للفوز، ثم قم بقطع طريقه قبل أن يُكمل الصف.',
            forkingStrategy: 'استراتيجية الشوكة: الشوكة تحدث عندما تنشئ حركتين فائزتين في نفس الوقت، مما يجعل خصمك قادرًا على إيقاف واحدة فقط، وبالتالي تضمن الفوز.',
            avoidingLosses: 'تجنب الخسارة القسرية: إذا حصل خصمك على علامتين متتاليتين مع وجود مساحة فارغة، يجب عليك حجبها فورًا.',
            localPvPMode: 'وضع اللعب المحلي (لاعب ضد لاعب)',
            localPvPModeContent: `
                في وضع اللاعب ضد اللاعب المحلي، يتناوب لاعبان على اتخاذ الحركات على نفس الجهاز. يوفر هذا الوضع خيارات مرنة لإعداد اللعبة وتخصيص التجربة.<br><br>

                <b>إعدادات اللعبة:</b>
            `, boardSizeDesc: 'حجم اللوحة: اختر حجم اللوحة بين 3×3 و10×10. اللوحات الأكبر تؤدي إلى مباريات أكثر استراتيجية وأطول.',
            startingPlayerDesc: 'اللاعب الأول: حدد ما إذا كان X أو O سيبدأ أولاً، حيث يتمتع اللاعب الأول عادةً بميزة طفيفة.',
            howToPlay: 'كيفية اللعب:',
            howToPlay1: 'يتناوب اللاعبون الأدوار، حيث يضع كل منهم رمزه (X أو O) في خلية فارغة.',
            howToPlay2: 'الهدف هو محاذاة عدد معين من الرموز في صف أو عمود أو قطر:',
            howToPlay3: 'بالنسبة للوحة 3×3: الفوز يتحقق عند الحصول على 3 رموز متتالية.',
            howToPlay4: 'بالنسبة للوحات الأكبر: يجب تحقيق n رموز متتالية للفوز (حيث n هو حجم اللوحة).',
            howToPlay5: 'إذا امتلأت اللوحة بدون فائز، تنتهي اللعبة بالتعادل.',
            onlinePvPMode: 'وضع اللعب عبر الإنترنت (لاعب ضد لاعب)',
            onlinePvPContent: `
                في وضع اللعب عبر الإنترنت 1v1، يمكن للاعبين تحدي خصوم عبر الإنترنت. يمكنك إنشاء أو الانضمام إلى الألعاب وتخصيص الإعدادات للحصول على تجربة مثالية.<br><br>

                <b>إنشاء لعبة</b><br>
                عند إنشاء لعبة، يمكنك اختيار إحدى خيارات الظهور التالية:
            `, publicDesc: 'عام: ستظهر اللعبة في قائمة الألعاب العامة، مما يسمح لأي شخص بالانضمام.',
            unlistedDesc: 'غير مدرجة: لا تظهر اللعبة في القائمة العامة، ولكن يمكن الانضمام إليها باستخدام رمز اللعبة أو الرابط المباشر.',
            privateDesc: 'خاصة: تتطلب اللعبة كلمة مرور للدخول، مما يضمن أن اللاعبين المدعوين فقط يمكنهم الانضمام.',
            onlinePvPContent1: 'يمكنك أيضًا تحديد اللاعب الذي يبدأ المباراة:',
            xStart: 'X (يبدأ دائمًا)',
            oStart: 'O (يبدأ دائمًا)',
            randomStart: 'عشوائي (يتم الاختيار بشكل عشوائي)',
            afterCreating: `
                بعد إنشاء اللعبة، ستدخل إلى ردهة اللعبة، حيث يمكن لمنشئ اللعبة تعيين رموز اللاعبين (X أو O) قبل بدء المباراة.<br><br>

                <b>الانضمام إلى لعبة</b><br>
                يمكنك الانضمام إلى لعبة بثلاث طرق:
            `, selectPublicList: 'اختيار لعبة من القائمة العامة (للألعاب العامة).',
            enterGameCode: 'إدخال رمز اللعبة (للألعاب غير المدرجة أو الخاصة).',
            useDirectUrl: 'استخدام رابط مباشر يشاركه منشئ اللعبة (حاليًا متاح فقط للألعاب العامة أو غير المدرجة).',
            gameplay: 'طريقة اللعب',
            standardRules: 'تتبع اللعبة قواعد إكس-أو القياسية، حيث يتناوب اللاعبون على وضع رموزهم على اللوحة.',
            winCondition: 'يفوز أول لاعب يحصل على 3 رموز متتالية.',
            drawCondition: 'إذا امتلأت اللوحة بدون فائز، تنتهي اللعبة بالتعادل.',
            playerVsBotMode: 'وضع اللعب ضد الذكاء الاصطناعي',
            playerVsBotContent: `
                في وضع اللعب ضد الذكاء الاصطناعي، يمكنك تحدي خصم كمبيوتر بمستويات صعوبة مختلفة. قم بتخصيص إعدادات اللعبة
                واختبر مهاراتك ضد روبوتات متزايدة الصعوبة!<br><br>

                <b>إعدادات اللعبة</b>
            `, vsBotStarting: 'اللاعب الأول: يمكنك اختيار ما إذا كنت ستبدأ أولاً أم أن الروبوت سيبدأ. الروبوت يلعب دائمًا كـ X.',
            vsBotWinCondition: 'شروط الفوز: أول من يحصل على 3 رموز متتالية يفوز.',
            botDifficultyLevels: 'مستويات صعوبة الروبوت',
            botDifficultyEasy: '<b>سهل (عشوائي)</b> – يقوم الروبوت بحركات عشوائية تمامًا، مما يجعله غير تحدي تقريبًا.',
            botDifficultyMedium: '<b>متوسط (استراتيجية أساسية)</b> – يتبع الروبوت القواعد التالية:',
            botDifficultyImpossible: '<b>مستحيل (خوارزمية Minimax)</b> – يستخدم الروبوت خوارزمية Minimax، مما يعني أنه يلعب بشكل مثالي ولا يمكن أن يخسر.',
            botDifficultyAI: `
                <b>الذكاء الاصطناعي (Gemini 2.0 Flash Lite)</b> – يستخدم الروبوت نموذج لغة Gemini 2.0 Flash Lite للتنبؤ بالحركات،
                ولكن نظرًا لأنه يختار أحيانًا خلايا مشغولة، فإنه يعود إلى استراتيجية الروبوت المتوسط عند الحاجة. هذا يجعل الذكاء الاصطناعي مزيجًا من العشوائية والاستراتيجية.
            `, winIfPossible: 'الفوز إذا كان ممكنًا.',
            blockOpponentsMove: 'إذا لم يكن الفوز ممكنًا، قم بحجب حركة الفوز للخصم.',
            makeRandomMove: 'إذا لم ينطبق أي مما سبق، قم بحركة عشوائية.',
            turnsAlternate: 'يتناوب الأدوار بينك وبين الروبوت.',
            botMakesMove: 'يقوم الروبوت فورًا بحركته عندما يحين دوره.',
            endsInDraw: 'إذا امتلأت اللوحة بدون فائز، تنتهي اللعبة بالتعادل.'

        }
    },
    zh: {
        name: "繁體中文",
        flag: "https://flagsapi.com/CN/flat/32.png",
        translations: {
            title: "井字遊戲",
            selectMode: '选择模式:',
            pvpLocal: 'PvP (本地)',
            pvpOnline: 'PvP (在线)',
            vsBot: '对战机器人',
            boardSize: '选择棋盘大小:',
            botDifficulty: '选择机器人难度:',
            difficultyEasy: '简单',
            difficultyMedium: '中等',
            difficultyImpossible: '不可能',
            difficultyAI: 'AI',
            startingPlayer: '起始玩家:',
            startGame: '开始游戏',
            restartGame: '重新开始',
            nowPlaying: '现在进行:',
            enemyThinking: '敌人在思考...',
            gameTie: '平局!',
            gameWin: '玩家 {player} 获胜!',
            gameWon: '你赢了!',
            createOnlineGame: '创建游戏',
            joinOnlineGame: '加入游戏',
            noGamesFound: '找不到游戏',
            gameName: '游戏名称:',
            gameVisibility: '游戏可见性:',
            public: '公开',
            unlisted: '未列出',
            private: '私人',
            gamePassword: '游戏密码:',
            gameCode: '游戏代码:',
            password: '密码:',
            leaveGame: '离开',
            leaveGameConfirm: '您确定要离开游戏吗?',
            yes: '是',
            no: '否',
            player: '玩家',
            players: '玩家',
            ready: '准备',
            notReady: '未准备好',
            waitingForPlayers: '等待玩家...',
            copyLink: '加入链接已复制到剪贴板',
            copyCode: '游戏代码已复制到剪贴板',
            invalidSize: '无效的棋盘大小。请选择3到10之间的大小。',
            invalidGameName: '无效的游戏名称格式。请仅使用字母、数字和空格。长度必须在3到20个字符之间。',
            invalidPasswordFormat: '无效的密码格式。请仅使用字母、数字和特殊字符。长度必须在6到20个字符之间。',
            invalidGameCode: '无效的游戏代码格式。请仅使用字母和数字。长度必须为6个字符。',
            badRequest: '加入游戏时出错。(错误请求)',
            unauthorized: '身份验证失败，请重试。',
            forbidden: '您无权加入此游戏。',
            notFound: '找不到游戏。',
            internalServerError: '加入游戏时出错。',
            notAllowed: '您无权执行此操作。',
            gameNotFound: '找不到游戏。请检查代码并重试。',
            aiMoveError: '获取AI移动时出错。',
            createGameError: '创建在线游戏时出错。',
            joinGameError: '加入在线游戏时出错。',
            listGamesError: '获取在线游戏列表时出错。',
            helpHeader: '如何玩?',
            game: '游戏',
            online: '在线',
            about: '关于我',
            generalInfo: '基本資訊',
            generalInfoContent: `
                井字遊戲 是一款簡單但具有戰略性的雙人遊戲，遊戲在 3x3 的棋盤上進行。玩家輪流在方格內標記自己的符號——"X" 或 "O"。
                目標是讓三個相同的符號連成一條直線，可以是橫向、縱向或對角線。<br><br>
            
                儘管遊戲簡單，但它鼓勵邏輯思維和策略，因為最優玩家可以始終強迫獲勝或逼平對手。井字遊戲經常被用作遊戲理論和人工智慧的入門示例，因為它擁有有限的遊戲狀態數量。
            `, commonStrategies: '常見策略',
            commonStrategiesContent: '雖然井字遊戲很簡單，但要掌握它仍然需要戰略思維。以下是一些增加勝率的關鍵策略：',
            cornerOpening: '角落開局：盡量從角落開始，這通常能讓你有更多機會創建多條勝利路徑。',
            centerControl: '控制中心：佔據中心格子是很強的策略，因為這最大化了形成勝利線的可能性。',
            blockingOpponent: '封鎖對手：時刻留意對手的潛在勝利步驟，並在他們完成三連線前進行封鎖。',
            forkingStrategy: '雙線進攻策略：所謂「雙線進攻」是指創建兩個可能的勝利路徑，這樣對手只能封鎖一條，而你就能獲勝。',
            avoidingLosses: '避免被迫輸掉：如果對手已經有兩個標記排成一列，且只差一格即可取勝，必須立即封鎖該格子。',
            localPvPMode: '本地玩家對戰模式',
            localPvPModeContent: `
                在本地玩家對戰模式下，兩名玩家可以在同一設備上輪流進行遊戲。該模式允許自訂遊戲設置，以提供最佳遊戲體驗。<br><br>
            
                <b>遊戲設置：</b>
            `, boardSizeDesc: '棋盤大小：可選擇 3×3 至 10×10 的棋盤尺寸，較大的棋盤可提供更具戰略性的對局。',
            startingPlayerDesc: '先手玩家：選擇由 "X" 或 "O" 先行。一般來說，先手玩家會有些微優勢。',
            howToPlay: '遊戲規則：',
            howToPlay1: '玩家輪流落子，將自己的標記（X 或 O）放在空白格子內。',
            howToPlay2: '目標是讓特定數量的符號排成一條直線（橫向、縱向或對角線）：',
            howToPlay3: '對於 3×3 棋盤：先排成 3 個相同符號者獲勝。',
            howToPlay4: '對於更大棋盤：需要連成 n 個相同符號才能獲勝（n 為棋盤大小）。',
            howToPlay5: '若棋盤被填滿但無人獲勝，則遊戲平手。',
            onlinePvPMode: '線上玩家對戰模式',
            onlinePvPContent: `
                在線上 1v1 模式中，玩家可以透過網路挑戰對手。你可以創建或加入遊戲，並自訂設置來獲得最佳遊戲體驗。<br><br>
            
                <b>創建遊戲</b><br>
                在創建遊戲時，你可以選擇以下可見性選項：
            `, publicDesc: '公開：遊戲將顯示在公開遊戲列表中，任何人都可以加入。',
            unlistedDesc: '未列出：遊戲不會顯示在公開列表，但可透過遊戲代碼或直接連結加入。',
            privateDesc: '私人：遊戲需要密碼才能進入，確保只有受邀玩家可以加入。',
            onlinePvPContent1: '你還可以設定先手玩家：',
            xStart: 'X（總是先手）',
            oStart: 'O（總是先手）',
            randomStart: '隨機（隨機決定誰先開始）',
            afterCreating: `
                創建遊戲後，你將進入遊戲大廳，房主可以在開始比賽前指派每位玩家的符號（X 或 O）。<br><br>
            
                <b>加入遊戲</b><br>
                你可以透過以下方式加入遊戲：
            `, selectPublicList: '從公開列表中選擇一場遊戲（僅適用於公開遊戲）。',
            enterGameCode: '輸入遊戲代碼（適用於未列出或私人遊戲）。',
            useDirectUrl: '使用遊戲創建者分享的直接連結（目前僅適用於公開或未列出的遊戲）。',
            gameplay: '遊戲過程',
            standardRules: '遊戲遵循標準井字遊戲規則，玩家輪流在棋盤上放置自己的標記。',
            winCondition: '第一位成功連成 3 個相同符號的玩家獲勝。',
            drawCondition: '如果棋盤被填滿但無人獲勝，則遊戲平手。',
            playerVsBotMode: '玩家對電腦模式',
            playerVsBotContent: `
                在玩家對電腦模式中，你可以挑戰不同難度的 AI 對手。自訂遊戲設置並測試你的技巧，挑戰越來越強的電腦！<br><br>
            
                <b>遊戲設置</b>
            `, vsBotStarting: '先手玩家：你可以選擇由自己或電腦先開始。電腦始終使用 X。',
            vsBotWinCondition: '勝利條件：第一個連成 3 個相同符號的玩家獲勝。',
            botDifficultyLevels: '電腦難度級別',
            botDifficultyEasy: '<b>簡單（隨機）</b> – 電腦完全隨機落子，幾乎沒有挑戰性。',
            botDifficultyMedium: '<b>普通（基本策略）</b> – 電腦遵循簡單規則：',
            botDifficultyImpossible: '<b>不可能（極限演算法）</b> – 電腦使用 Minimax 演算法，這意味著它的決策完美無缺，不可能輸。',
            botDifficultyAI: `
                <b>AI（Gemini 2.0 Flash Lite）</b> – 電腦使用 Gemini 2.0 Flash Lite 語言模型來預測下一步，但有時會選擇已被佔據的格子，
                這時它會回落到普通難度的策略，因此該 AI 既有不可預測性，也具有一定策略性。
            `, winIfPossible: '如果可能，優先贏得比賽。',
            blockOpponentsMove: '如果無法取勝，則封鎖對手的致勝步驟。',
            makeRandomMove: '如果以上條件皆不符合，則隨機落子。',
            turnsAlternate: '玩家與電腦輪流下棋。',
            botMakesMove: '當輪到電腦時，它會立即落子。',
            endsInDraw: '如果棋盤填滿但無人獲勝，則遊戲平手。'
        }
    },
    ja: {
        name: "日本語",
        flag: "https://flagsapi.com/JP/flat/32.png",
        translations: {
            title: "三目並べ",
            selectMode: 'モードを選択:',
            pvpLocal: 'PvP (ローカル)',
            pvpOnline: 'PvP (オンライン)',
            vsBot: 'ボットに対して',
            boardSize: 'ボードのサイズを選択:',
            botDifficulty: 'ボットの難易度を選択:',
            difficultyEasy: '簡単',
            difficultyMedium: '中級',
            difficultyImpossible: '不可能',
            difficultyAI: 'AI',
            startingPlayer: '開始プレイヤー:',
            startGame: 'ゲーム開始',
            restartGame: 'もう一度プレイ',
            nowPlaying: '現在プレイ中:',
            enemyThinking: '敵は考えている...',
            gameTie: '引き分け!',
            gameWin: 'プレイヤー {player} の勝利!',
            gameWon: 'あなたの勝ち!',
            createOnlineGame: 'ゲームを作成',
            joinOnlineGame: 'ゲームに参加',
            noGamesFound: 'ゲームが見つかりません',
            gameName: 'ゲーム名:',
            gameVisibility: 'ゲームの可視性:',
            public: '公開',
            unlisted: '非公開',
            private: 'プライベート',
            gamePassword: 'ゲームのパスワード:',
            gameCode: 'ゲームコード:',
            password: 'パスワード:',
            leaveGame: '去る',
            leaveGameConfirm: 'ゲームを終了してもよろしいですか?',
            yes: 'はい',
            no: 'いいえ',
            player: 'プレイヤー',
            players: 'プレイヤー',
            ready: '準備完了',
            notReady: '準備ができていない',
            waitingForPlayers: 'プレイヤーを待っています...',
            copyLink: '参加リンクがクリップボードにコピーされました',
            copyCode: 'ゲームコードがクリップボードにコピーされました',
            invalidSize: '無効なボードサイズです。3から10の間のサイズを選択してください。',
            invalidGameName: '無効なゲーム名の形式です。文字、数字、スペースのみを使用してください。長さは3から20文字の間である必要があります。',
            invalidPasswordFormat: '無効なパスワード形式です。文字、数字、特殊文字のみを使用してください。長さは6から20文字の間である必要があります。',
            invalidGameCode: '無効なゲームコード形式です。文字と数字のみを使用してください。長さは6文字である必要があります。',
            badRequest: 'ゲームに参加する際にエラーが発生しました。(不正なリクエスト)',
            unauthorized: '認証に失敗しました。もう一度お試しください。',
            forbidden: 'このゲームに参加する権限がありません。',
            notFound: 'ゲームが見つかりませんでした。',
            internalServerError: 'ゲームに参加する際にエラーが発生しました。',
            notAllowed: 'この操作を実行する権限がありません。',
            gameNotFound: 'ゲームが見つかりませんでした。コードを確認してもう一度お試しください。',
            aiMoveError: 'AIの動きを取得する際にエラーが発生しました。',
            createGameError: 'オンラインゲームの作成中にエラーが発生しました。',
            joinGameError: 'オンラインゲームに参加する際にエラーが発生しました。',
            listGamesError: 'オンラインゲームのリストを取得する際にエラーが発生しました。',
            helpHeader: 'プレーの仕方は?',
            game: 'ゲーム',
            online: 'オンライン',
            about: '私について',
            generalInfo: '基本情報',
            generalInfoContent: `
                三目並べ は、3×3のグリッド上で2人のプレイヤーが交互にマスを埋めるシンプルながら戦略的なゲームです。プレイヤーは「X」または「O」の記号を交互に配置し、
                縦、横、または斜めに3つの記号を並べることが勝利条件となります。<br><br>
            
                このゲームは単純でありながら論理的思考と戦略を必要とします。最適なプレイをすれば、常に勝利または引き分けに持ち込むことが可能です。
                そのため、三目並べはゲーム理論や人工知能の入門としてよく利用されます。
            `, commonStrategies: '基本戦略',
            commonStrategiesContent: '三目並べはシンプルなゲームですが、上達するには戦略的思考が必要です。勝率を上げるための重要な戦略を紹介します。',
            cornerOpening: 'コーナーオープニング: 最初の手は角に置くのが有利です。これにより、複数の勝利ラインを作るチャンスが生まれます。',
            centerControl: '中央の制圧: 中央のマスを取ることで、多くの勝利パターンを作りやすくなります。',
            blockingOpponent: '相手の妨害: 相手が勝利しそうな手を見つけたら、すぐにブロックすることが重要です。',
            forkingStrategy: 'フォーク戦略: 一度に2つの勝利条件を作ることをフォークと呼びます。相手は片方しか防ぐことができないため、勝利につながります。',
            avoidingLosses: '敗北を防ぐ: 相手が2つのマークを並べた場合、すぐにブロックしないと負けてしまいます。',
            localPvPMode: 'ローカル対戦モード',
            localPvPModeContent: `
                ローカル対戦モードでは、1つのデバイスを使い、2人のプレイヤーが交互に手を打ちます。このモードでは、ゲーム設定をカスタマイズできます。<br><br>
            
                <b>ゲーム設定:</b>
            `, boardSizeDesc: '盤面のサイズ: 3×3から10×10まで選択可能。大きい盤面では戦略性が増します。',
            startingPlayerDesc: '先攻プレイヤー: 「X」または「O」のどちらが最初に動くか選べます。通常、先手が若干有利です。',
            howToPlay: '遊び方:',
            howToPlay1: 'プレイヤーは交互に自分の記号（XまたはO）を空いているマスに配置します。',
            howToPlay2: '縦、横、または斜めに一定数の記号を並べることが目的です。',
            howToPlay3: '3×3の盤面では、3つ並べれば勝利。',
            howToPlay4: '大きな盤面では、盤面のサイズ（n）に応じてn個並べる必要があります。',
            howToPlay5: '盤面が埋まっても勝者がいない場合、引き分けとなります。',
            onlinePvPMode: 'オンライン対戦モード',
            onlinePvPContent: `
                オンライン対戦モードでは、インターネットを通じて対戦相手と戦うことができます。ゲームを作成するか、既存のゲームに参加して、カスタマイズされた対戦を楽しめます。<br><br>
            
                <b>ゲーム作成</b><br>
                ゲーム作成時に、以下の公開設定を選択できます:
            `, publicDesc: '公開: 誰でも参加できる公開リストに表示されます。',
            unlistedDesc: '非公開: 公開リストには表示されませんが、ゲームコードまたはURLで参加できます。',
            privateDesc: 'プライベート: 参加にはパスワードが必要で、招待されたプレイヤーのみ参加可能です。',
            onlinePvPContent1: 'また、先攻プレイヤーを以下から選択できます:',
            xStart: 'X（常に先攻）',
            oStart: 'O（常に先攻）',
            randomStart: 'ランダム（ランダムに決定）',
            afterCreating: `
                ゲームを作成すると、ゲームロビーに入り、ゲーム開始前にプレイヤーの記号（XまたはO）を割り当てることができます。<br><br>
            
                <b>ゲーム参加</b><br>
                以下の3つの方法でゲームに参加できます:
            `, selectPublicList: '公開リストからゲームを選択（公開ゲーム用）。',
            enterGameCode: 'ゲームコードを入力（非公開またはプライベートゲーム用）。',
            useDirectUrl: 'ゲーム作成者が共有したURLを使用（現在、公開または非公開ゲームのみ）。',

            gameplay: 'ゲームプレイ',
            standardRules: '標準ルールに従い、プレイヤーは交互にマスを埋めます。',
            winCondition: '先に3つ並べたプレイヤーが勝利。',
            drawCondition: '盤面が埋まって勝者がいない場合、引き分け。',

            playerVsBotMode: 'プレイヤー vs ボット モード',
            playerVsBotContent: `
                プレイヤー vs ボット モードでは、異なる難易度のコンピュータと対戦できます。設定をカスタマイズして、自分のスキルを試しましょう！<br><br>
            
                <b>ゲーム設定</b>
            `, vsBotStarting: '先攻プレイヤー: プレイヤーまたはボットのどちらが先攻か選べます。ボットは常にXとしてプレイします。',
            vsBotWinCondition: '勝利条件: 先に3つ並べた方が勝利。',
            botDifficultyLevels: 'ボットの難易度',
            botDifficultyEasy: '<b>簡単（ランダム）</b> – ボットは完全にランダムな手を打ち、ほとんど挑戦になりません。',
            botDifficultyMedium: '<b>中級（基本戦略）</b> – ボットは以下の簡単なルールに従います:',
            botDifficultyImpossible: '<b>無敵（Minimaxアルゴリズム）</b> – ボットはMinimaxアルゴリズムを使用し、完璧なプレイを行うため負けません。',
            botDifficultyAI: `
                <b>AI（Gemini 2.0 Flash Lite）</b> – ボットはGemini 2.0 Flash Liteモデルを使用して手を予測しますが、時々無効な手を選ぶため、
                必要に応じて中級ボットの戦略にフォールバックします。これにより、予測不能かつ戦略的なプレイが組み合わさります。
            `,
            winIfPossible: '勝てる場合は勝利手を選ぶ。',
            blockOpponentsMove: '勝てない場合は、相手の勝利手を防ぐ。',
            makeRandomMove: 'どちらもできない場合は、ランダムに手を選ぶ。',
            turnsAlternate: 'プレイヤーとボットが交互に手を打ちます。',
            botMakesMove: 'ボットのターンになると、すぐに手を打ちます。',
            endsInDraw: '盤面が埋まり勝者がいない場合、引き分けとなります。'
        }
    },
    ko: {
        name: "한국인",
        flag: "https://flagsapi.com/KR/flat/32.png",
        translations: {
            title: "틱택토",
            selectMode: '모드 선택:',
            pvpLocal: 'PvP (로컬)',
            pvpOnline: 'PvP (온라인)',
            vsBot: '봇과의 전투',
            boardSize: '보드 크기 선택:',
            botDifficulty: '봇 난이도 선택:',
            difficultyEasy: '쉬운',
            difficultyMedium: '중간',
            difficultyImpossible: '불가능한',
            difficultyAI: 'AI',
            startingPlayer: '시작 플레이어:',
            startGame: '게임 시작',
            restartGame: '다시 플레이',
            nowPlaying: '현재 플레이 중:',
            enemyThinking: '적이 생각 중...',
            gameTie: '무승부!',
            gameWin: '플레이어 {player} 승리!',
            gameWon: '당신이 이겼습니다!',
            createOnlineGame: '게임 만들기',
            joinOnlineGame: '게임 참가',
            noGamesFound: '게임을 찾을 수 없습니다',
            gameName: '게임 이름:',
            gameVisibility: '게임 가시성:',
            public: '공개',
            unlisted: '비공개',
            private: '비공개',
            gamePassword: '게임 비밀번호:',
            gameCode: '게임 코드:',
            password: '암호:',
            leaveGame: '떠나다',
            leaveGameConfirm: '게임을 나가시겠습니까?',
            yes: '예',
            no: '아니',
            player: '플레이어',
            players: '플레이어',
            ready: '준비 완료',
            notReady: '준비되지 않음',
            waitingForPlayers: '플레이어 대기 중...',
            copyLink: '가입 링크가 클립 보드에 복사되었습니다',
            copyCode: '게임 코드가 클립 보드에 복사되었습니다',
            invalidSize: '잘못된 보드 크기입니다. 3에서 10 사이의 크기를 선택하십시오.',
            invalidGameName: '잘못된 게임 이름 형식입니다. 문자, 숫자, 공백만 사용하십시오. 길이는 3에서 20 자 여야합니다.',
            invalidPasswordFormat: '잘못된 비밀번호 형식입니다. 문자, 숫자, 특수 문자만 사용하십시오. 길이는 6에서 20 자 여야합니다.',
            invalidGameCode: '잘못된 게임 코드 형식입니다. 문자와 숫자만 사용하십시오. 길이는 6 자 여야합니다.',
            badRequest: '게임 참가 중 오류가 발생했습니다. (잘못된 요청)',
            unauthorized: '인증 실패, 다시 시도하십시오.',
            forbidden: '이 게임에 참가할 수있는 권한이 없습니다.',
            notFound: '게임을 찾을 수 없습니다.',
            internalServerError: '게임 참가 중 오류가 발생했습니다.',
            notAllowed: '이 작업을 수행할 수있는 권한이 없습니다.',
            gameNotFound: '게임을 찾을 수 없습니다. 코드를 확인하고 다시 시도하십시오.',
            aiMoveError: 'AI 이동을 가져 오는 중 오류가 발생했습니다.',
            createGameError: '온라인 게임을 만드는 중 오류가 발생했습니다.',
            joinGameError: '온라인 게임에 참가하는 중 오류가 발생했습니다.',
            listGamesError: '온라인 게임 목록을 가져 오는 중 오류가 발생했습니다.',
            helpHeader: '어떻게 플레이하나요?',
            game: '게임',
            online: '온라인',
            about: '나에 대해',
            generalInfo: '일반 정보',
            generalInfoContent: `
                틱택토는 3×3 그리드에서 진행되는 간단하지만 전략적인 2인용 게임입니다. 플레이어들은 번갈아 가며 자신의 심볼(X 또는 O)을 빈 칸에 표시합니다.
                목표는 가로, 세로 또는 대각선으로 세 개의 심볼을 연속으로 맞추는 것입니다.<br><br>

                게임은 단순하지만 논리적 사고와 전략을 요구합니다. 최적의 플레이를 하면 항상 승리하거나 무승부를 만들 수 있습니다. 틱택토는
                게임 이론과 인공지능을 소개하는 데 자주 사용되며, 가능한 게임 상태의 수가 유한하기 때문에 분석하기 쉽습니다.
            `, commonStrategies: '기본 전략',
            commonStrategiesContent: '틱택토는 단순한 게임이지만, 마스터하려면 전략적 사고가 필요합니다. 승리 확률을 높이는 몇 가지 핵심 전략을 소개합니다:',
            cornerOpening: '코너 오프닝: 항상 코너에서 시작하는 것이 좋습니다. 이렇게 하면 여러 개의 승리 라인을 만들 가능성이 높아집니다.',
            centerControl: '센터 컨트롤: 중앙을 차지하면 승리할 수 있는 기회가 극대화됩니다.',
            blockingOpponent: '상대 차단: 상대가 승리할 가능성이 있는 수를 항상 주의 깊게 살펴보고, 승리를 막아야 합니다.',
            forkingStrategy: '포크 전략: 한 번의 수로 두 개의 승리 가능성을 만드는 전략입니다. 상대는 하나만 막을 수 있기 때문에 승리를 보장할 수 있습니다.',
            avoidingLosses: '필수 차단: 상대가 두 개의 심볼을 연속으로 놓고 한 칸만 남겨두었다면 즉시 차단해야 합니다.',
            localPvPMode: '로컬 플레이어 vs 플레이어 모드',
            localPvPModeContent: `
                로컬 플레이어 vs 플레이어 모드에서는 두 명의 플레이어가 같은 기기에서 번갈아 가며 게임을 진행합니다. 이 모드에서는 다양한 설정을 통해 게임을 맞춤 조정할 수 있습니다.<br><br>

                <b>게임 설정:</b>
            `, boardSizeDesc: '보드 크기: 3×3부터 10×10까지 보드 크기를 선택할 수 있습니다. 보드가 클수록 더 전략적인 게임이 됩니다.',
            startingPlayerDesc: '시작 플레이어: X 또는 O 중 누가 먼저 시작할지 선택할 수 있습니다. 일반적으로 선공이 약간의 우위를 가집니다.',
            howToPlay: '게임 방법:',
            howToPlay1: '플레이어는 번갈아 가며 빈 칸에 자신의 심볼(X 또는 O)을 배치합니다.',
            howToPlay2: '목표는 가로, 세로 또는 대각선으로 특정 개수의 심볼을 연속으로 맞추는 것입니다:',
            howToPlay3: '3×3 보드: 3개를 연속으로 맞추면 승리합니다.',
            howToPlay4: '더 큰 보드: n개의 연속된 심볼이 필요하며, n은 보드 크기와 동일합니다.',
            howToPlay5: '보드가 가득 찼는데 승자가 없으면 무승부로 끝납니다.',
            onlinePvPMode: '온라인 플레이어 vs 플레이어 모드',
            onlinePvPContent: `
                온라인 1대1 모드에서는 인터넷을 통해 다른 플레이어와 대결할 수 있습니다. 게임을 생성하거나 참가하여 맞춤 설정을 통해 최적의 환경에서 플레이할 수 있습니다.<br><br>

                <b>게임 생성</b><br>
                게임을 생성할 때 다음 가시성 옵션 중 하나를 선택할 수 있습니다:
            `, publicDesc: '공개: 게임이 공개 리스트에 표시되며, 누구나 참가할 수 있습니다.',
            unlistedDesc: '비공개(언리스트): 게임이 공개 리스트에 표시되지 않지만, 게임 코드나 직접 URL을 통해 참가할 수 있습니다.',
            privateDesc: '비밀번호 보호: 비밀번호를 입력해야만 참가할 수 있어 초대한 플레이어만 참여할 수 있습니다.',
            onlinePvPContent1: '또한, 시작 플레이어를 다음 중 하나로 설정할 수 있습니다:',
            xStart: 'X (항상 선공)',
            oStart: 'O (항상 선공)',
            randomStart: '랜덤 (무작위로 선공 결정)',
            afterCreating: `
                게임을 생성한 후, <b>게임 로비</b>에 들어가게 됩니다. 여기서 게임 호스트가 각 플레이어의 심볼(X 또는 O)을 배정한 후 경기를 시작할 수 있습니다.<br><br>

                <b>게임 참가</b><br>
                게임에 참가하는 방법은 세 가지가 있습니다:
            `, selectPublicList: '공개 리스트에서 게임을 선택하여 참가(공개 게임의 경우).',
            enterGameCode: '게임 코드를 입력하여 참가(비공개 또는 암호 보호 게임의 경우).',
            useDirectUrl: '게임 생성자가 공유한 직접 URL을 사용하여 참가(현재는 공개 또는 비공개 게임만 해당).',
            gameplay: '게임 플레이',
            standardRules: '게임은 표준 틱택토 규칙을 따르며, 플레이어는 번갈아 가며 보드에 심볼을 배치합니다.',
            winCondition: '첫 번째로 3개를 연속으로 맞춘 플레이어가 승리합니다.',
            drawCondition: '보드가 가득 찼는데 승자가 없으면 무승부로 끝납니다.',
            playerVsBotMode: '플레이어 vs 봇 모드',
            playerVsBotContent: `
                플레이어 vs 봇 모드에서는 다양한 난이도의 인공지능(AI) 상대와 대결할 수 있습니다. 게임 설정을 조정하여 점점 더 강한 봇과 실력을 겨뤄 보세요!<br><br>

                <b>게임 설정</b>
            `, vsBotStarting: '시작 플레이어: 플레이어나 봇 중 누가 먼저 시작할지 선택할 수 있습니다. 봇은 항상 X로 플레이합니다.',
            vsBotWinCondition: '승리 조건: 3개를 연속으로 맞추면 승리합니다.',
            botDifficultyLevels: '봇 난이도 설정',
            botDifficultyEasy: '<b>쉬움(랜덤)</b> – 봇이 완전히 무작위로 움직이며, 거의 도전이 되지 않습니다.',
            botDifficultyMedium: '<b>중간(기본 전략)</b> – 봇은 다음과 같은 간단한 규칙을 따릅니다:',
            botDifficultyImpossible: '<b>불가능(Minimax 알고리즘)</b> – 봇은 Minimax 알고리즘을 사용하여 완벽한 플레이를 하며 절대 패배하지 않습니다.',
            botDifficultyAI: `
                <b>AI (Gemini 2.0 Flash Lite)</b> – 봇이 Gemini 2.0 Flash Lite 언어 모델을 활용하여 수를 예측하지만, 가끔 이미 차지된 칸을 선택하는 문제가 있습니다.
                따라서 필요할 경우 중간 난이도 봇의 전략을 사용하여 보완됩니다. 이 AI는 예측 불가능성과 전략적 플레이를 혼합한 스타일을 가집니다.
            `, winIfPossible: '승리할 수 있으면 즉시 승리합니다.',
            blockOpponentsMove: '승리가 불가능하면 상대의 승리 기회를 차단합니다.',
            makeRandomMove: '두 가지 경우가 모두 불가능하면 무작위로 움직입니다.',
            turnsAlternate: '플레이어와 봇이 번갈아 가며 턴을 진행합니다.',
            botMakesMove: '봇은 자신의 턴이 되면 즉시 움직입니다.',
            endsInDraw: '보드가 가득 찼는데 승자가 없으면 무승부로 끝납니다.'

        }
    }
};