import React from 'react'

const Definition = ({word, category, meanings}) => {
  return (
    <div className='meanings'>
      {word === '' ? (
        <span className='subtitle'>Start by typing a word in search</span>
      ) : (
        meanings.map((mean) => 
          mean.meanings.map((item) => 
            item.definitions.map((def) => (
              <div
                className='singleMean'
              >
                <b>{def.definition}</b>
                <hr />
                {def.example && (
                  <span>
                    <b>Example</b>:
                    {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms: </b>
                    {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  )
}

export default Definition
