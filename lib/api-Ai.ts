export  const streamFromOpenAI = async (text: any) => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: text }],
          stream: true,
        }),
      });

      if (!response.ok) {
        throw new Error('OpenAI API error');
      }

      const reader = response?.body?.getReader();
      const decoder = new TextDecoder();
      let responseText = '';

      while (true) {
        const { done, value } = await reader!.read();
        if (done) break;
        const chunk = decoder.decode(value);
        responseText += chunk;
      }
      return responseText
      
    } catch (error) {
      console.error('Streaming error:', error);
    }
  };
