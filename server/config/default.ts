export default {
    port: 5656,
    dbUri: "mongodb://localhost:27017/HabitHero",
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    publicKey: `-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCOlLKAvU0X0nznHVtZSWZ6XGz8
    0wGnm08ou7pYb579NFFaQEzdZ2qlTrUyXvU8w/y6IDdhEqSO+QZ5Nirs5/U8uFzT
    pebl2MkQEC7h/xEt96Jse372RKaBSe6Yp8/hRoDdosj7UNBkj+El/v7HLiJB06F0
    oekWqyAF4g0UoaCD7QIDAQAB
    -----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIICXAIBAAKBgQCOlLKAvU0X0nznHVtZSWZ6XGz80wGnm08ou7pYb579NFFaQEzd
    Z2qlTrUyXvU8w/y6IDdhEqSO+QZ5Nirs5/U8uFzTpebl2MkQEC7h/xEt96Jse372
    RKaBSe6Yp8/hRoDdosj7UNBkj+El/v7HLiJB06F0oekWqyAF4g0UoaCD7QIDAQAB
    AoGAOEsHKwMSdAxb2hfiIB91wWvKcAuTRKxyFYAA87emSwwj7oEil+uj1H591dRd
    +M7cclQT6VSl+fjiEGtNiVmPnf6sfR0Ynb3fgZ0WFyxtg6DcA5+MAvwnMGIi3Lsf
    vzCy7EB36/pbo8Kmhlc4zVAouFIIKciM5LqXFFgqYGr6REECQQDp1KoPS+8gVB0h
    9Bar6wk65S+MCVZKlXtsWf3beTiuDsBX11sDCmhq0M2lh7ioaW/H5Au1WHQ6DR4G
    G7h5JqJdAkEAnBlLqA9+W8y4oYRFtwJoJj1OtXdSRRlHY3CpgBpIs357aGfXggux
    5kF1JxCmxG2S8jgdFOelpHk/Omkqy3pu0QJAPFZK952Be9cYmV1RyFTi0da32SvD
    n4VJDuF91vdFv+xAh6ojavpxjTaKCi+mX5ataGgY+Vd0zlH6MFtQ07o7ZQJAMO2E
    11Kz6pZKsOXC7FAm0QWabCrQcLQxuiuQFYUnkItupxUVab+8rU2LKQmBHES0MJQC
    GZFaTCls9iQMs+bWYQJBALslJpJkY7fifa11+h4IAkoYeLwpVOFEl3Rdp60QyGRB
    O1Q7StSID60wqBq+hBCGYmf2OfPkswBw8zjl3NIgUk8=
    -----END RSA PRIVATE KEY-----`
    
}