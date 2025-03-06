const fishes = [   
    "><(((('>",
    "><((('>",
    "><(())°>",
    "><(((0>",
    "><(()'>",
    "><((()*>",
    "><(()(°>",
    "><(()(^>",
    "><(()(°>--"
];

const flop = [
`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⣀⣠⣄⡀⣀⣠⣼⣶⣦⣤⣄⣦⣄⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣴⣶⣶⡿⣶⡶⠢⣼⡷⣾⠿⢿⡛⠿⣯⣍⠓⢬⡙⠢⡙⢦⡙⠣⡙⠫⣿⢟⠢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢰⠢⢤⡀⠀⠈⠛⢯⡷⢬⡓⠬⡓⢤⡙⠢⣍⠲⢌⡓⢤⣙⣷⣦⣾⡷⠾⠷⠾⠷⠾⢷⣮⣦⣵⣮⡳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣠⢼⣤⡳⡍⠲⢄⡀⠀⠈⠳⢌⡓⢬⡑⠮⡑⢬⣵⣶⠿⡿⠋⠁⣠⠊⠀⠀⣠⠊⠀⢀⠎⠀⠀⣿⠈⠙⠻⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠳⣄⢿⣻⣬⡓⠤⣙⣦⣄⣀⠀⠙⢢⣈⣶⣼⠿⠋⠀⡜⠁⠀⡰⠁⠀⠀⡰⠁⠀⢠⠋⠀⠀⠀⢸⡆⠀⠀⠀⠉⠢⣄⠀⠀⠀⠀⠀⠀⠀
⠀⣯⠷⢬⣉⣛⡒⢤⣈⣙⣹⣿⠛⠛⠉⡽⠃⠀⠀⡜⠀⠀⠰⠁⠀⠀⡰⠁⠀⠀⠎⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠈⠳⡄⠀⠀⠀⠀⠀
⠀⠘⡦⠤⠄⢀⠀⠈⠉⢈⣿⠃⠀⠀⢰⠁⠀⠀⢰⠁⠀⠀⠇⠀⠀⢠⠃⠀⠀⡸⠀⠀⠀⠀⠀⣸⠇⠀⠀⢀⡴⠶⢤⡀⠘⣆⠀⠀⠀⠀
⠀⠀⢳⠤⠦⠒⠛⠛⢛⣙⣿⠀⠀⠀⢺⠀⠀⠀⡆⠀⠀⢸⠀⠀⠀⠘⠀⠀⠀⠇⠀⠀⠀⠀⢀⡿⠀⠀⠀⣾⢡⣶⣶⢹⡀⠈⢧⡀⠀⠀
⠀⢀⡼⠶⠬⠽⠓⣒⡲⠞⣻⣤⣤⣀⠘⡄⠀⠀⡇⠀⠀⡆⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⢀⣾⠃⠀⠀⠀⠙⠿⠿⠿⠋⠀⠀⠀⠙⠢⣀
⠀⠹⣤⣒⣊⡭⠕⡲⢖⣾⢋⠞⣠⡿⠢⣄⡀⠀⢡⠀⠀⢇⠀⠀⠀⢸⠀⠀⢈⠀⠀⠀⢠⡾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣀⣤⣤⣾
⠀⠀⠀⢏⡠⢖⣡⢶⣿⢣⣿⠞⢉⣠⠞⠁⣙⠶⣤⣇⠀⠈⡄⠀⠀⠘⡄⠀⠈⡅⠀⠀⠈⢣⠀⠀⠀⠀⠀⠀⢀⣀⡀⠤⠴⠿⠿⠿⣛⣉
⠀⠀⠀⠈⣏⣩⠔⢡⠇⠈⠓⠿⢭⣠⡴⢚⡥⢚⡡⠼⠋⣒⣾⣤⣄⣀⣱⣀⣀⠙⡄⠀⠀⠈⡇⠀⠀⠀⠀⠀⢈⣡⠴⠲⠤⠤⠴⠚⠉⠀
⠀⠀⠀⠀⠛⠢⠴⠋⠀⠀⠀⠀⠀⠀⠉⠉⠓⠋⠒⠒⠉⠀⣼⣋⠭⢟⣛⣿⢿⣻⣿⣿⠿⠟⠛⠛⠛⠛⠛⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠟⣋⣭⠶⢛⡫⠝⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⠿⠛⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`,
`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⣄⡆⡦⢔⢔⢴⡤⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣔⡪⢟⢗⢕⢅⣜⣌⣬⣼⣼⣴⣥⣀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢙⢻⡶⣕⢵⣫⣿⣷⡿⣿⠟⣿⡿⢿⣿⣿⣶⣄⠀⠀⠀⠀
⢀⣀⡀⠀⠀⠀⠀⠀⠿⣯⢝⣵⡟⣿⠃⡯⠀⡿⢁⣿⢁⣿⣏⠙⠿⠛⣧⡀⠀⠀
⢿⣿⠿⣿⣿⣶⣶⣴⣾⣿⠛⣿⠀⡿⢸⡇⢸⡇⢸⡇⢸⢿⠿⠀⠠⠀⣽⡿⣄⠀
⢀⣽⣭⣽⣿⡏⠟⠉⡇⢸⠀⣿⠀⠙⠭⠽⢛⣳⣽⣧⣿⡏⡆⠀⣇⠀⠉⢁⠝⡃
⢼⣵⠟⠉⠁⠁⠀⣴⣟⠢⠀⠘⠀⠇⢔⣒⣛⠿⡿⠟⠃⠀⠈⠢⡀⠀⠀⢀⠩⠃
⠈⠁⠀⠀⠀⠀⢸⣟⢿⣣⣕⠄⡀⠀⠀⢀⣀⣀⣤⣤⣤⠤⠤⠤⠴⠛⠋⠁⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⣵⣥⠦⠏⠉⠉⠀⣠⣾⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠸⡛⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`];

const lobsters = [    '\n                            ,.---.   \n               ,,,,     /    _ `.\n                \\\\   /      \\  )\n                 |||| //`-.__/\n                 :::::/_\n {{`-.__.-\'(`(^^(^^^(^ 9 `.=========\'\n{{{{{{ { ( ( (  (   (-----:=\n {{.-\'~~\'-.(,(,,(,,,(__6_.=========.\n                 ::::/ \n                 |||| /  ,-\'/\\\n                 ///  \\ _/  )\n               \'\'\'\'     \\  `   /\n                         ---\'\'\n    '];

const krakens = [`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⡿⠿⢿⣿⣷⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⣷⣠⣴⣶⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠻⢿⡄⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣿⣿⣟⠉⢹⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⠿⠿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠉⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⣀⣀⠀⠀⠀⠀⠀⣰⣿⣿⡟⠁⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠈⢿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣴⣾⣿⣿⣿⣿⣶⡀⢀⣾⣿⣿⠋⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠹⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢸⣿⡁⠀⠀⢀⣿⣿⢇⣾⣿⣿⠃⠀⠀⠀⠀⠀⠀⣿⡈⠙⢿⣿⣿⣿⠿⠋⢩⡇⠀⠀⠀⠀⠀⠀⠙⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀
⠈⠛⠛⣠⣴⣿⡿⠋⢸⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⣿⣿⣶⣾⣿⣿⣿⣷⣶⣿⡇⠀⠀⠀⠀⠀⠀⠀⣻⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣠⣾⣿⡿⠋⠀⠀⢻⣿⣿⣷⡀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⢠⣿⣿⣏⣠⣤⣶⣤⠀⠀⠀⠀
⢰⣿⣿⣟⠀⠀⠀⠀⠘⢿⣿⣿⣿⣷⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣤⣴⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀
⢸⣿⣿⣿⣦⣄⣀⠀⠀⠀⠉⠙⠛⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠉⢻⣿⣄⠀⠀⠀⠀⠀⠀⠀
⠀⠙⠿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠈⢿⣿⣶⣄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠉⠉⠙⠛⠛⠛⠛⠛⣿⣿⣿⣿⠟⢋⣿⣿⣿⡿⠋⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠙⢿⣿⣧⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⠟⠁⠀⣿⣿⣿⠟⠀⠀⢀⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠈⢿⣿⣷⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⠏⠀⠀⢸⣿⣿⣿⠀⠀⠀⢸⣿⣿⣿⠀⠈⢻⣿⣿⣿⢿⣿⣿⣦⡀⠀⠀⠀⣸⣿⣿⠀⣀⡄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⡟⠀⠀⠀⠸⣿⣿⣿⠀⠀⠀⢻⣿⣿⣿⠀⠀⠀⢻⣿⣿⡆⠹⢿⣿⣿⣶⣶⣾⣿⣿⣿⣿⠋⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⡿⠁⠀⠀⠀⠀⢿⣿⣿⡆⠀⠀⠸⣿⣿⣿⡄⠀⠀⠀⢿⣿⣿⠀⠀⠙⠛⠿⠿⠿⠛⠋⢸⣿⠀⠀
⠀⠀⠀⠀⠀⠀⣠⣴⣿⣿⡿⠛⠁⠀⠀⠀⠀⠀⠘⣿⣿⣿⠀⠀⠀⣿⣿⣿⡇⠀⠀⠀⢸⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀
⠀⠀⠀⢠⣶⣿⣿⠿⠋⠁⠒⠛⢻⣷⠀⠀⠀⠀⠀⢹⣿⣿⡇⠀⣠⣿⣿⣿⢃⣴⣿⠟⠛⢿⣿⣿⡄⠀⠀⠀⠀⠀⠀⢠⣿⣿⠀⠀
⠀⠀⢰⣿⣿⠟⠁⠀⠀⠀⠀⢀⣾⡟⠀⠀⠀⠀⠀⠘⣿⣿⣧⣾⣿⣿⠟⠁⣾⣿⡇⠀⠀⠘⢿⣿⣿⣦⡀⠀⠀⣀⣴⣿⣿⠃⠀⠀
⠀⠀⣿⣿⡇⠀⠀⢀⡄⠀⢠⣿⣿⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⠟⠁⠀⠀⢿⣿⣇⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀
⠀⠀⠹⣿⣷⣄⣀⣼⡇⠀⢸⣿⣿⡀⠀⠀⠀⠀⣠⣿⣿⣿⡿⠋⠀⠀⠀⠀⢸⣿⣿⡀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠈⠛⠛⠛⠋⠀⠀⠀⢻⣿⣿⣶⣶⣶⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠛⠛⠛⠉⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣷⣄⣀⠀⢀⣀⣴⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`];

const entons = [`⠀⠀⠀⠀⠀⠀⠀⠀⣤⡀⠀⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣆⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠸⣷⣮⣿⣿⣄⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⡠⠒⠉⠀⠀⠀⠀⠀⠀⠈⠁⠲⢖⠒⡀⠀⠀
⠀⠀⠀⡠⠴⣏⠀⢀⡀⠀⢀⡀⠀⠀⠀⡀⠀⠀⡀⠱⡈⢄⠀
⠀⠀⢠⠁⠀⢸⠐⠁⠀⠄⠀⢸⠀⠀⢎⠀⠂⠀⠈⡄⢡⠀⢣
⠀⢀⠂⠀⠀⢸⠈⠢⠤⠤⠐⢁⠄⠒⠢⢁⣂⡐⠊⠀⡄⠀⠸
⠀⡘⠀⠀⠀⢸⠀⢠⠐⠒⠈⠀⠀⠀⠀⠀⠀⠈⢆⠜⠀⠀⢸
⠀⡇⠀⠀⠀⠀⡗⢺⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⡄⢀⠎
⠀⢃⠀⠀⠀⢀⠃⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠷⡃⠀
⠀⠈⠢⣤⠀⠈⠀⠀⠑⠠⠤⣀⣀⣀⣀⣀⡀⠤⠒⠁⠀⢡⠀
⡀⣀⠀⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢘⠀
⠑⢄⠉⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡸⠀
⠀⠀⠑⠢⢱⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠁⠀
⠀⠀⠀⠀⢀⠠⠓⠢⠤⣀⣀⡀⠀⠀⣀⣀⡀⠤⠒⠑⢄⠀⠀
⠀⠀⠀⠰⠥⠤⢄⢀⡠⠄⡈⡀⠀⠀⣇⣀⠠⢄⠀⠒⠤⠣⠀
⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀`];

const aquarium = document.querySelector("#aquarium");


// Creates Fish at a random Postition
function createFish(){
    const fish = document.createElement("div");
    fish.classList.add("fish");
    fish.innerText = fishes[Math.floor(Math.random() * fishes.length)];

    fish.style.top = Math.random() * window.innerHeight + "px";
    fish.style.left = -50 + "px"; // Starts left

    document.body.appendChild(fish);
    console.log("Neuer Fisch erstellt:", fish.innerText, fish.style.top);
    animateFish(fish);
};

// Function: moves Fish from left to right

function animateFish(fish){
    let speed = Math.random() * 7 + 1; // random speed
    let position = -50; // Starts left

    function move(){
        position += speed;
        fish.style.left = position + "px";

        if(position > window.innerWidth) {
            fish.remove();
        }else{
            requestAnimationFrame(move);
        }
    }
    move();
};

// Creates a new Fish ervery second
setInterval(createFish, 1000);


//--------------------------------------------------------------------------------------


function createLobster(){
    const lobster = document.createElement("div");
    lobster.classList.add("lobster");
    lobster.innerText = lobsters[Math.floor(Math.random() * lobsters.length)];

    lobster.style.top = Math.random() * window.innerHeight + "px";
    lobster.style.left = -50 + "px"; // Starts left also

    document.body.appendChild(lobster);
    console.log("Neuer Hummer erstellt", lobster.innerText, lobster.style.top);
    animateLobster(lobster);
};

function animateLobster(lobster){
    let speed = Math.random() * 2 + 1;
    let position = -50;

    function move(){
        position += speed;
        lobster.style.left = position + "px";

        if(position > window.innerWidth){
            lobster.remove();
        }else{
            requestAnimationFrame(move);
        }
    }
    move();
};

setInterval(createLobster, 16000);

//--------------------------------------------------------------------------------------------------

function createBob(){
    const bob = document.createElement("div");
    bob.classList.add("bob");
    bob.innerText = flop[Math.floor(Math.random() * flop.length)];

    bob.style.top = Math.random() * window.innerHeight + "px";
    bob.style.left = -50 + "px"; // Starts left

    document.body.appendChild(bob);
    console.log("Noch ein neuer Fisch erstellt:", bob.innerText, bob.style.top);
    animateBob(bob);
};

// Function: moves Fish from left to right

function animateBob(bob){
    let speed = Math.random() * 3 + 1; // random speed
    let position = -50; // Starts left

    function move(){
        position += speed;
        bob.style.left = position + "px";

        if(position > window.innerWidth) {
            bob.remove();
        }else{
            requestAnimationFrame(move);
        }
    }
    move();
};

setInterval(createBob, 10000);
//---------------------------------------------------------------------------------

function createKraken(){
    const kraken = document.createElement("div");
    kraken.classList.add("kraken");
    kraken.innerText = krakens[Math.floor(Math.random() * krakens.length)];

    kraken.style.top = Math.random() * window.innerHeight + "px";
    kraken.style.left = -100 + "px"; // Starts left

    document.body.appendChild(kraken);
    console.log("Hilfe, der Kraken:", kraken.innerText, kraken.style.top);
    animateBob(kraken);
};

// Function: moves Fish from left to right

function animateKraken(kraken){
    let speed = Math.random() * 1 +  1; // random speed
    let position = -100; // Starts left

    function move(){
        position += speed;
        kraken.style.left = position + "px";

        if(position > window.innerWidth) {
            kraken.remove();
        }else{
            requestAnimationFrame(move);
        }
    }
    move();
};

setInterval(createKraken, 20000);


//-----------------------------------------------------------------------------------

function createEnton(){
    const enton = document.createElement("div");
    enton.classList.add("enton");
    enton.innerText = entons[Math.floor(Math.random() * entons.length)];

    enton.style.top = Math.random() * window.innerHeight + "px";
    enton.style.left = -50 + "px"; // Starts left

    document.body.appendChild(enton);
    console.log("Hilfe, Enton hat Kopfschmerzen. Dürfen Enten eigentlich Aspirin einnehmen?", enton.innerText, enton.style.top);
    animateEnton(enton);
};

// Function: moves Fish from left to right

function animateEnton(enton){
    let speed = Math.random() * 0 + 1; // random speed
    let position = -50; // Starts left

    function move(){
        position += speed;
        enton.style.left = position + "px";

        if(position > window.innerWidth) {
            enton.remove();
        }else{
            requestAnimationFrame(move);
        }
    }
    move();
};

setInterval(createEnton, 40000);

//-------------------------------------------------------------------------------------------------------------------


