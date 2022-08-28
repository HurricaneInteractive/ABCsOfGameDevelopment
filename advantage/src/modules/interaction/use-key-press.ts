import { useCallback, useEffect } from 'react';

export function useOnKeypress(keys: string[], callback: (event: KeyboardEvent) => void) {
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (keys.includes(event.key)) {
      callback(event)
    }
  }, [callback, keys])

  useEffect(() => {
    document.addEventListener('keyup', handleKeyPress)

    return () => {
      document.removeEventListener('keyup', handleKeyPress)
    }
  }, [handleKeyPress])
}
