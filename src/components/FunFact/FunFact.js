import React from 'react'

const funFact = [
  {
      title: '100+',
      subTitle: 'Projects Done',
  },
  {
      title: '10+',
      subTitle: 'Trusted Client',
  },
  {
      title: '5+',
      subTitle: 'Dedicated Cleaners',
  },
  {
      title: '55+',
      subTitle: 'Equipments',
  },


]


const FunFact = (props) => {
    return(
      <section className={`wpo-fun-fact-section section-padding ${props.fClass}`}>
          <div className="container">
              <div className="row">
                  <div className="col col-xs-12">
                      <div className="wpo-fun-fact-grids clearfix">
                          {funFact.map((funfact, fitem) => (
                                <div className="grid" key={fitem}>
                                    <div className="info">
                                        <h3>{funfact.title}</h3>
                                        <p>{funfact.subTitle}</p>
                                    </div>
                                </div>
                            ))}
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
}

export default FunFact;