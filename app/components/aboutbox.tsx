import { RiFireLine, RiCupLine, RiGroupLine, RiTrophyLine } from 'react-icons/ri';

export default function AboutSection() {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      padding: '20px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        width: 'calc(50% - 10px)',
        minWidth: '200px',
        maxWidth: '300px',
      }}>
        <RiFireLine style={{ fontSize: '40px', color: 'orange', marginRight: '10px' }} />
        <div>
          <h3 style={{ margin: '0', fontSize: '24px' }}>1.5</h3>
          <span style={{ fontSize: '16px' }}>Years of Experience</span>
        </div>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        width: 'calc(50% - 10px)',
        minWidth: '200px',
        maxWidth: '300px',
      }}>
        <RiCupLine style={{ fontSize: '40px', color: 'blue', marginRight: '10px' }} />
        <div>
          <h3 style={{ margin: '0', fontSize: '24px' }}>31</h3>
          <span style={{ fontSize: '16px' }}>Github Repositories</span>
        </div>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        width: 'calc(50% - 10px)',
        minWidth: '200px',
        maxWidth: '300px',
      }}>
        <RiGroupLine style={{ fontSize: '40px', color: 'green', marginRight: '10px' }} />
        <div>
          <h3 style={{ margin: '0', fontSize: '24px' }}>4+</h3>
          <span style={{ fontSize: '16px' }}>Launched Projects</span>
        </div>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        width: 'calc(50% - 10px)',
        minWidth: '200px',
        maxWidth: '300px',
      }}>
        <RiTrophyLine style={{ fontSize: '40px', color: 'gold', marginRight: '10px' }} />
        <div>
          <h3 style={{ margin: '0', fontSize: '24px' }}>100</h3>
          <span style={{ fontSize: '16px' }}>Code Quality</span>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 480px) {
          div > div {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}