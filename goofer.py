with open('units.txt', 'r') as f:
    for i in f:
        lmao = i.strip().split()
        print('{'+f'name: \"{lmao[0]}\",')
        print(f'maxhp: {lmao[1]},')
        print(f'att: {lmao[2]},')
        print(f'def: {lmao[3]},')
        print(f'ret: {("true" if lmao[4] == "t" else "false")}'+'},')