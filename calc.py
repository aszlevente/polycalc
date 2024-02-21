data = []
with open('units.txt', 'r') as f:
    for i in f:
        iarr = i.strip().split(' ')
        data.append({
            'name': iarr[0],
            'maxhp': float(iarr[1]),
            'att': float(iarr[2]),
            'def': float(iarr[3]),
            'ret': iarr[4] != 'f',
        })

def calcRes(atter: dict, defer: dict, attHp: float, defHp: float, defBon: float, poi: bool, boost: bool,
            attMax: float = 0, defMax: float = 0):
    
    if atter['maxhp'] == 0: atter['maxhp'] = attMax
    if defer['maxhp'] == 0: defer['maxhp'] = defMax
    
    if boost: atter['att'] += .5
    if poi: defer['def'] *= .7
    
    attackForce = atter['att'] * (attHp / atter['maxhp'])
    defenseForce = defer['def'] * (defHp / defer['maxhp']) * defBon
    totalDamage = attackForce + defenseForce
    result = {}
    result['attackResult'] = round((attackForce / totalDamage) * atter['att'] * 4.5)
    result['defenseResult'] = round((defenseForce / totalDamage) * defer['def'] * 4.5)
    
    return result

print(calcRes(data[0], data[34], 10.0, 10.0, 1.0, False, False))