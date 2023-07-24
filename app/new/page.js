import { Opens } from 'app/opens';
import opensContent from 'app/opensContent'

export default function Page() {
  return (
    <div className='Page'>
      {opensContent.map(opensContent => (
        <Opens
         key={opensContent.id}
         image={opensContent.image}
         name={opensContent.name}
         uni={opensContent.uni}
         description={opensContent.description}
        />
      ))}
    </div>
  )
}