T = ['test1', 'test2a', 'test2b', 'test3a', 'test3b']
R = ['Ok', 'No', 'No', 'Ok', 'No']


t_sp = T.map(t=> {
    t.match(/(\d+)/)
})